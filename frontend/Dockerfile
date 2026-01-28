# ---------- Base ----------
FROM node:20-alpine AS base
WORKDIR /app
RUN corepack enable

# ---------- Dependencies ----------
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---------- Build ----------
FROM deps AS build
COPY . .
RUN pnpm build

# ---------- Production ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npx", "pnpm", "start"]

