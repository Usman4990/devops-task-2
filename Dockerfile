# Stage 1: Dependencies
FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci


# Stage 2: Production
FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=dependencies /app/node_modules ./node_modules
COPY package*.json ./
COPY server.js ./

EXPOSE 3000

USER node

CMD ["node", "server.js"]