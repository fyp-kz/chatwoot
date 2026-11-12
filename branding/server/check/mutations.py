"""Manual condition-flip fallback for ub-mode's tools, which do not support Ruby.

Runs HTTP checks against each mutation in the disposable container, never core files.
The unmodified matrix and coverage must pass first (run.sh B0_MUTATIONS=1).
"""
import pathlib
import subprocess
import tempfile
import time

SERVICE = '/app/app/services/jeli/profile_deletion_service.rb'
CONTROLLER = '/app/app/controllers/api/v1/jeli_profile_deletions_controller.rb'
CHANNEL = '/app/app/channels/jeli/revoked_user_stream.rb'
mutations = [
    ('password', SERVICE, 'raise InvalidCredentials unless password', 'raise InvalidCredentials if password', 5),
    ('MFA-required', SERVICE, 'if @user.mfa_enabled?', 'unless @user.mfa_enabled?', 6),
    ('MFA-verifier', SERVICE,
     'Mfa::AuthenticationService.new(user: @user, otp_code: otp).authenticate', 'true', 6),
    ('only-member', SERVICE, 'if members.one?', 'if !members.one?', 2),
    ('admin-role', SERVICE, 'elsif membership.administrator?', 'elsif !membership.administrator?', 1),
    ('admin-count', SERVICE, 'members.count(&:administrator?) == 1', 'members.count(&:administrator?) == 2', 4),
    ('earliest-member', SERVICE, 'order(:created_at, :id)', 'order(created_at: :desc, id: :desc)', 3),
    ('workspace-mark', SERVICE, "when 'workspace_deleted'", "when 'never_deleted'", 2),
    ('promote', SERVICE, 'update!(role: :administrator)', 'update!(role: :agent)', 3),
    ('SuperAdmin', CONTROLLER, 'if current_user.is_a?(SuperAdmin)', 'unless current_user.is_a?(SuperAdmin)', 7),
    ('cable-revocation', CHANNEL, '!User.exists?', 'User.exists?', 12),
]


def compose(*args, check=True):
    return subprocess.run(['docker', 'compose', *args], capture_output=True, text=True, timeout=90, check=check)


killed = 0
with tempfile.TemporaryDirectory(prefix='b0-mutations-') as temporary:
    root = pathlib.Path(temporary)
    originals = {}
    for index, path in enumerate((SERVICE, CONTROLLER, CHANNEL)):
        local = root / str(index)
        compose('cp', f'rails:{path}', str(local))
        originals[path] = local.read_text()
    for label, path, old, new, case in mutations:
        source = originals[path]
        if source.count(old) != 1:
            raise RuntimeError(f'{label}: mutation target is not unique')
        local = root / 'changed.rb'
        local.write_text(source.replace(old, new))
        compose('cp', str(local), f'rails:{path}')
        try:
            compose('start', 'rails')
            for _ in range(40):
                ready = compose('exec', '-T', 'rails', 'wget', '-q', '-O', '/dev/null',
                                'http://127.0.0.1:3000/health', check=False)
                if ready.returncode == 0:
                    break
                time.sleep(0.5)
            else:
                raise RuntimeError(f'{label}: mutant server did not boot')
            result = compose('exec', '-T', '-e', f'B0_CASE={case}', 'rails',
                             'bundle', 'exec', 'rails', 'runner', '/b0-check/scenarios.rb', check=False)
            # A crash/boot failure is not a killed mutant: require the expected assertion result.
            marker = f'CASE {case}: FAIL exit=1 '
            if result.returncode != 1 or marker not in result.stdout:
                raise RuntimeError(f'{label}: SURVIVED or check infrastructure failed (exit={result.returncode})')
            killed += 1
            print(f'MUTATION {label}: KILLED check_exit=1', flush=True)
        finally:
            compose('stop', 'rails', check=False)
            local.write_text(source)
            compose('cp', str(local), f'rails:{path}')
print(f'MUTATION PASS killed={killed}/{len(mutations)} surviving=0 exit=0')
