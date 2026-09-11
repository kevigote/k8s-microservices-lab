#====================================================
# Dockerfile for Multi-Stage Build
#====================================================
# Stage 1: Build the application
#====================================================
FROM alpine:latest AS builder

WORKDIR /app

COPY html/index.html .

RUN mkdir -p /build && cp index.html /build/index.html

#====================================================
# Stage 2: Create the final image
#====================================================
FROM nginx:latest

COPY --from=builder /build/index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]