# Деплой на инфраструктуру FYP

Chatwoot живёт на апп-сервере `appone` и управляется панелью Coolify
(https://coolify.fyp.kz). Описание самой инфраструктуры и общий процесс деплоя —
в репозитории [fyp-kz/fyp-infra](https://github.com/fyp-kz/fyp-infra)
(скилл `.claude/skills/deploy-fyp`).

| Что | Значение |
|---|---|
| Домен | https://chat.fyp.kz |
| Coolify project | `chatwoot` (`oswjtubmiwu8k9bltwflreas`) |
| Application UUID | `7efuf2b7jshecfjm5xw1thyb` |
| Сервер | `appone` (`9ny7bymwnm6vcignkcitzse2`), публичный IP 91.224.74.35 |
| Ветка деплоя | `deploy/fyp` |
| Манифест | [`docker-compose.coolify.yaml`](../docker-compose.coolify.yaml) |
| Образ | `chatwoot/chatwoot:v4.17.1` (Docker Hub) |

## Почему готовый образ, а не сборка из исходников

`docker/Dockerfile` собирает gem-ы и фронтенд через vite; сборке нужно порядка
6 ГБ RAM (`NODE_OPTIONS=--max-old-space-size=4096`) и 20–40 минут. Coolify
собирает прямо на апп-сервере, где рядом крутятся чужие приложения, — такая
сборка кладёт сервер целиком. Пока форк совпадает с upstream, разницы между
своей сборкой и официальным образом нет.

Когда в форке появится свой код: собирать образ в GitHub Actions, пушить в GHCR
и здесь менять только `image:`. Собирать на `appone` — нельзя.

## Что запускается

| Сервис | Роль |
|---|---|
| `rails` | Puma на 3000, наружу через Traefik (домен из Coolify) |
| `sidekiq` | фоновые задачи |
| `postgres` | `pgvector/pgvector:pg16` — pgvector нужен Captain-у |
| `redis` | кеш, ActionCable, очереди Sidekiq; пароль обязателен |

Порты наружу не публикуются: маршрут делает Traefik по метке
`SERVICE_FQDN_RAILS_3000`. Данные — в томах `postgres_data`, `redis_data`,
`storage_data` (вложения ActiveStorage, общий том для rails и sidekiq).

Миграции гоняет сам контейнер: `db:chatwoot_prepare` в `command` перед стартом
Puma. Задача идемпотентна — на пустой базе грузит схему и сиды, дальше только
миграции. Первый запуск из-за этого занимает 2–4 минуты, и всё это время
Traefik отдаёт 503: контейнер ещё не слушает 3000.

## Переменные окружения

Значения живут в Coolify (Application → Environment Variables), в репозитории их
нет. Обязательные: `SECRET_KEY_BASE`, `POSTGRES_PASSWORD`, `REDIS_PASSWORD`,
`ACTIVE_RECORD_ENCRYPTION_*` (нужны для 2FA), `FRONTEND_URL`.

`FRONTEND_URL` — не косметика: из него собираются ссылки в письмах, webhook-URL
каналов (Telegram, WhatsApp, Twilio) и `BASE_URL` скрипта веб-виджета. При смене
домена его надо менять вместе с доменом в Coolify, иначе виджет на сайте клиента
будет ходить на старый адрес.

Почта не настроена: `SMTP_ADDRESS` пуст. Не работают приглашения агентов,
сброс пароля и уведомления на e-mail. Чтобы включить — заполнить `SMTP_*`
(и `MAILER_SENDER_EMAIL` на домене, который разрешён SPF/DKIM).

## Первый вход

Пока в Redis стоит флаг `CHATWOOT_INSTALLATION_ONBOARDING`, корень сайта
редиректит на `/installation/onboarding` — форму создания первого супер-админа.
Аккаунт создаётся сразу подтверждённым, почта для этого не нужна. После
онбординга флаг снимается и форма больше не открывается.

`ENABLE_ACCOUNT_SIGNUP=false` — публичная регистрация закрыта; агентов заводит
админ через Settings → Agents (нужен работающий SMTP) или через `rails c`.

## Обновление версии

1. Поменять тег в `docker-compose.coolify.yaml` (`image: chatwoot/chatwoot:vX.Y.Z`)
   и запушить в `deploy/fyp`.
2. Запустить деплой руками — кнопкой в панели или
   `curl -X POST -H "Authorization: Bearer $COOLIFY_API_TOKEN" \
   "https://coolify.fyp.kz/api/v1/deploy?uuid=7efuf2b7jshecfjm5xw1thyb"`.
   Флаг авто-деплоя в Coolify включён, но вебхука в репозитории нет
   (приложение подключено как public repo, без GitHub App), так что пуш сам
   ничего не запускает.
3. Миграции накатятся сами при старте контейнера.
4. Перед мажорным апгрейдом — бэкап базы: Coolify → Databases не подходит
   (postgres поднят внутри compose), поэтому `pg_dump` из контейнера вручную.

## Отладка

- Логи контейнеров: панель → приложение → Logs, или
  `GET /api/v1/applications/7efuf2b7jshecfjm5xw1thyb/logs?lines=100`.
- 503 от Traefik сразу после деплоя — нормально, идут миграции; проверять
  `curl https://chat.fyp.kz/health` до появления `{"status":"woot"}`.
- 503, который не проходит, — смотреть логи `rails`: чаще всего не хватает
  переменной окружения или не поднялся postgres.
- Проверка живости: `/health` (только веб-процесс). Контейнерный healthcheck
  строже — дополнительно дёргает `pg_isready`, поэтому статус в Coolify
  краснеет и при мёртвой базе.
