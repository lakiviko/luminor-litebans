ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-bookworm-slim AS deps
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates tzdata openssl libssl3 && \
    rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci

FROM node:${NODE_VERSION}-bookworm-slim AS builder
WORKDIR /app
ENV NODE_ENV=production
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates tzdata openssl libssl3 && \
    rm -rf /var/lib/apt/lists/*
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV PRISMA_CLIENT_ENGINE_TYPE=library
ENV PRISMA_CLI_QUERY_ENGINE_TYPE_LIBRARY=1
RUN npx prisma generate

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:${NODE_VERSION}-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates tzdata openssl libssl3 && \
    rm -rf /var/lib/apt/lists/* && \
    useradd -m nextjs

COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next ./.next
COPY --from=builder --chown=nextjs:nextjs /app/node_modules ./node_modules
COPY --chown=nextjs:nextjs package.json ./

RUN mkdir -p /app/.next/cache/images && chown -R nextjs:nextjs /app

USER nextjs
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "run", "start"]
