# Jeli self-service profile deletion (B0)

This server overlay targets the unmodified `chatwoot/chatwoot:v4.17.1` image.
`branding/Dockerfile` copies only new `server/app/` and `server/config/` files into
`/app`. Check scripts are mounted only in the disposable acceptance stack.

## Routes and authentication

`config/initializers/jeli_profile_deletion.rb` uses
`Rails.application.routes.append`; the upstream profile controller and routes
remain unchanged. The new controller inherits `Api::BaseController`, including
the existing devise_token_auth authentication. It skips auth-header refresh so
deletion cannot refresh credentials or reload a user already destroyed by a worker.

* `GET /api/v1/profile/deletion`: workspace IDs, names, original membership roles,
  and planned outcomes.
* `DELETE /api/v1/profile`: flat JSON `{password, otp?}`; returns HTTP 202 and
  `{deleted: true, workspaces: [...]}` after synchronous revocation.
* Invalid password or missing/invalid required OTP: 422. SuperAdmin: 403.

The service locks the user, then accounts in ID order and membership rows in
creation/ID order. All SQL changes, including OTP consumption, workspace marking,
promotion, membership removal, subscription/access-token destruction, and login
revocation, share one transaction. The earliest member wins a promotion; ID
breaks creation-time ties. Preview uses the same planner.

Deletion removes email/UID lookup, clears the password hash, reset/confirmation
tokens and MFA credentials, wipes DTA tokens, destroys the standalone API access
token, and rotates the cable credential. Core `DeleteObjectJob.perform_later(user)`
is enqueued only after commit, avoiding a destructive job escaping a rollback.
As with core Chatwoot jobs, SQL and Redis enqueue are separate commits: a Redis
failure after SQL commit leaves a fully revoked user requiring the deletion job
to be re-enqueued. No distributed transaction/outbox is introduced by this overlay.

Membership rows use `delete` deliberately: upstream `AccountUser#after_destroy`
enqueues `Agents::DestroyJob` before SQL commit in this image, so `destroy!` could
remove live user's team/inbox data after a rollback. The eventual core User
destruction cleans its settings, inbox/team memberships and other associations.

## Necessary runtime extension

`Jeli::RevokedUserStream` is prepended to **RoomChannel#transmit** via `to_prepare`.
This is the only core-method override. In 4.17.1 the connection has no user
identifiers and RoomChannel caches its user, so the usual remote disconnect by
user cannot work. Before sending any event, this guard checks the persisted
pubsub credential. A revoked/deleted user gets no event; its streams stop and
the socket closes with reconnect disabled. It covers account and private
streams, across server processes through the shared DB. Contact streams and
other users retain existing behavior. No core file or Enterprise code changes.

## Facts checked in the actual 4.17.1 image

* `Internal::DeleteAccountsJob` exists and selects
  `custom_attributes.marked_for_deletion_at <= Time.current`, with no extra grace
  period. `config/schedule.yml` schedules it daily at 01:00 UTC. It calls
  `AccountDeletionService`, which enqueues `DeleteObjectJob(account)`.
* `marked_for_deletion_reason` exists in account views and compliance mail;
  the scheduler does not filter by reason. The overlay writes `user_self_delete`.
* `DeleteObjectJob#perform(object, user = nil, ip = nil)` calls `object.destroy!`
  and accepts User; only Account/Inbox have special heavy-association purges.
* MFA is `otp_required_for_login` / `mfa_enabled?`. The existing
  `Mfa::AuthenticationService` consumes OTPs via `validate_and_consume_otp!`.
* `SuperAdmin < User`; `AccountUser` roles are `agent` / `administrator`.
* Rack::Attack's global `req/ip` throttle covers both paths (default 3000/minute),
  except its existing trusted-IP safelist or when throttling is disabled by
  configuration. No dedicated DELETE-profile password/OTP throttle exists.
  No throttle is added, because DELETE is already globally throttled.
* The stock profile resource exposes show/update, not these new endpoints.

## Reproduce safely on MBP

From the worktree on Air:

```sh
mbp-run -- zsh -lc 'B0_MUTATIONS=1 perl -e '\''alarm 900; exec @ARGV'\'' bash branding/server/check/run.sh'
```

The script generates throwaway keys in process environment, uses a dedicated
Compose project, an in-memory PostgreSQL data directory and isolated Redis, and
never exposes a host port. Scenario requests target only container loopback.
The runner refuses any database other than `jeli_b0_synthetic`; all identities
use `example.invalid`. No Sidekiq worker or mail delivery runs: the checks inspect
queued jobs and explicitly execute core deletion jobs where needed.

Expected duration: about five minutes; hard timeout: fifteen minutes; completion:
matrix and mutation exit 0. Baseline mode (`run.sh baseline`) must fail case 1
with preview 404 before adding the overlay.

Outputs in `~/qa-out/jeli-chatwoot/`: `b0-check.log`, `b0-coverage.json`,
`b0-mutations.log`, and build/start/prepare/cleanup logs. The trap removes the
stack, ephemeral DB, anonymous volumes and newly pulled check images; pre-existing
images are preserved. If inspecting the base image separately, remove that own
pull and any own image tag/build cache afterward.

## Acceptance and ub-mode

The HTTP matrix checks requested cases 1–10, plus an injected SQL failure after
workspace changes (case 11), and an actual ActionCable WebSocket with a second
user as control (case 12). Case 5 compares byte-identical raw user/membership/
subscription snapshots. Cases 1–4 compare exact preview and deletion response
arrays. Core account sweeping and User destruction are executed directly.

Ruby's built-in Coverage records server-side lines and branches. The ub-mode
CRAP and duplication tools are **not run: their supported languages exclude
Ruby**. The fallback flips conditions/decisions individually in disposable
overlay files, restarts the real HTTP server, and requires the corresponding
scenario to fail. No mutation touches core or the source worktree. Coverage is
captured from the original passing matrix before mutations. CI, deployment,
mobile-device QA and production behavior are separate, unrun gates for this task.
