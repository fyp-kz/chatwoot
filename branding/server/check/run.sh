#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
export B0_SECRET_KEY_BASE B0_ENCRYPTION_KEY B0_DETERMINISTIC_KEY B0_ENCRYPTION_SALT
B0_SECRET_KEY_BASE=$(openssl rand -hex 64)
B0_ENCRYPTION_KEY=$(openssl rand -hex 32)
B0_DETERMINISTIC_KEY=$(openssl rand -hex 32)
B0_ENCRYPTION_SALT=$(openssl rand -hex 32)
qa_dir="$HOME/qa-out/jeli-chatwoot"
mkdir -p "$qa_dir"
export DOCKER_HOST="unix://$HOME/.orbstack/run/docker.sock"
export DOCKER_CONFIG="$qa_dir/b0-docker-config"
mkdir -p "$DOCKER_CONFIG"
# Anonymous public pulls must not invoke a locked macOS Keychain.
printf '%s\n' '{"auths":{"https://index.docker.io/v1/":{}},"cliPluginsExtraDirs":["/Applications/OrbStack.app/Contents/MacOS/xbin"]}' > "$DOCKER_CONFIG/config.json"
images=(jeli-b0-check:local pgvector/pgvector:pg16 redis:7-alpine)
new_images=()
for image in "${images[@]}"; do
  if ! docker image inspect "$image" >/dev/null 2>&1; then new_images+=("$image"); fi
done
cleanup() {
  set +e
  docker compose down --volumes --remove-orphans > "$qa_dir/b0-cleanup.log" 2>&1
  for image in "${new_images[@]}"; do
    docker image rm "$image" >> "$qa_dir/b0-cleanup.log" 2>&1 || true
  done
}
trap cleanup EXIT
trap 'exit 124' HUP INT TERM ALRM
if [[ ${1:-} == baseline ]]; then
  docker tag chatwoot/chatwoot:v4.17.1 jeli-b0-check:local
  log="$qa_dir/b0-baseline.log"
else
  docker compose build > "$qa_dir/b0-build.log" 2>&1
  log="$qa_dir/b0-check.log"
fi
docker compose up -d postgres redis > "$qa_dir/b0-start.log" 2>&1
docker compose run --rm rails bundle exec rails db:chatwoot_prepare > "$qa_dir/b0-prepare.log" 2>&1
docker compose up -d rails >> "$qa_dir/b0-start.log" 2>&1
ready=0
for ((attempt=0; attempt<60; attempt++)); do
  if docker compose exec -T rails wget -q -O /dev/null http://127.0.0.1:3000/health 2>/dev/null; then ready=1; break; fi
  sleep 2
done
if [[ $ready != 1 ]]; then echo 'STARTUP FAIL exit=1'; exit 1; fi
set +e
if [[ ${1:-} == baseline ]]; then
  docker compose exec -T -e B0_CASE=1 rails bundle exec rails runner /b0-check/scenarios.rb > "$log" 2>&1
else
  docker compose exec -T rails bundle exec rails runner /b0-check/scenarios.rb > "$log" 2>&1
fi
result=$?
set -e
docker compose stop rails >> "$qa_dir/b0-stop.log" 2>&1
docker compose cp rails:/tmp/b0-coverage.json "$qa_dir/b0-coverage.json" >> "$qa_dir/b0-stop.log" 2>&1
cat "$log"
if [[ $result == 0 && ${B0_MUTATIONS:-0} == 1 ]]; then
  python3 mutations.py > "$qa_dir/b0-mutations.log" 2>&1
  cat "$qa_dir/b0-mutations.log"
fi
exit "$result"
