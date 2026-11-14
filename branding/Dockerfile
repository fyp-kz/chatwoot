# Тонкий слой брендинга Jeli.kz поверх официального образа: статика public/
# (фавиконки, логотипы, manifest) и короткие ru-заголовки пушей.
# Собирается на appone за секунды — исходники не компилируются.
FROM chatwoot/chatwoot:v4.17.1
COPY public/ /app/public/
COPY locales/ /app/config/locales/
COPY server/app/ /app/app/
COPY server/config/ /app/config/
# С DISABLE_ENTERPRISE=true Rails всё равно берёт EE-шаблон письма-приглашения, а он зовёт
# Account#saml_enabled? из выключенного EE-слоя: письмо падает. Убираем его, остаётся обычный шаблон.
RUN rm -f /app/enterprise/app/views/devise/mailer/confirmation_instructions.html.erb
