FROM node:18-alpine AS base

FROM base as builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . .
RUN npm install

ENV NEXT_PUBLIC_API_URL https://api.spiill.com
ENV NEXTAUTH_SECRET f0120772c5883f5f7cd2809250e7b28e
ENV NEXTAUTH_URL http://link.spiill.com
ENV NEXT_PUBLIC_APP_URL http://link.spiill.com

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm install --save-dev @types/redux-logger
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
