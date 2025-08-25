# syntax=docker/dockerfile:1

ARG NODE_VERSION=20

# 1) Устанавливаем зависимости npm (быстро кешируется)
FROM node:${NODE_VERSION}-bookworm-slim AS deps
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl ca-certificates tzdata && \
    rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci

# 2) Сборка приложения + генерация Prisma Client
FROM node:${NODE_VERSION}-bookworm-slim AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
# копируем исходники
COPY . .
# Генерируем Prisma Client (нужен DATABASE_URL на этапе build только если вы делаете db pull/migrate)
ENV PRISMA_CLI_QUERY_ENGINE_TYPE_LIBRARY=1
RUN npx prisma generate
# Отключаем телеметрию Next (по желанию)
ENV NEXT_TELEMETRY_DISABLED=1
# Сборка Next.js
RUN npm run build

# 3) Рантайм образ
FROM node:${NODE_VERSION}-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
# Непривилегированный пользователь
RUN useradd -m nextjs

# Копируем только необходимое для запуска
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=deps    /app/node_modules ./node_modules
COPY package.json ./
COPY next.config.mjs ./

ENV PORT=3000
EXPOSE 3000

USER nextjs
# В package.json должен быть "start": "next start -p $PORT"
CMD ["npm", "run", "start"]
