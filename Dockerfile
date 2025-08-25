# syntax=docker/dockerfile:1
ARG NODE_VERSION=20

# 1) deps — установка зависимостей npm
FROM node:${NODE_VERSION}-bookworm-slim AS deps
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates tzdata openssl libssl3 && \
    rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci

# 2) builder — prisma generate + сборка Next.js
FROM node:${NODE_VERSION}-bookworm-slim AS builder
WORKDIR /app
ENV NODE_ENV=production
# OpenSSL 3 нужен уже на этапе generate
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates tzdata openssl libssl3 && \
    rm -rf /var/lib/apt/lists/*
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Подсказываем Prisma использовать library engine
ENV PRISMA_CLIENT_ENGINE_TYPE=library
ENV PRISMA_CLI_QUERY_ENGINE_TYPE_LIBRARY=1

# ВАЖНО: generate выполняется на bookworm с libssl3 → бинари под openssl-3.0.x
RUN npx prisma generate

# Сборка Next.js
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 3) runner — чистый рантайм
FROM node:${NODE_VERSION}-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates tzdata openssl libssl3 && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/* && \
    useradd -m nextjs

# Копируем только нужное
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
# Берём node_modules из builder (внутри уже лежит сгенерированный Prisma client)
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./
# Если есть next.config.*, при необходимости добавь:
# COPY next.config.mjs ./

ENV PORT=3000
EXPOSE 3000
USER nextjs
CMD ["npm", "run", "start"]
