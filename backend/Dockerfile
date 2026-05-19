#====================================================
# Dockerfile for Multi-Stage Build
#====================================================
# Stage 1: Dependencies
#====================================================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY server.js .

#====================================================
# Stage 2: Runtime
#====================================================
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD [ "node", "server.js" ]