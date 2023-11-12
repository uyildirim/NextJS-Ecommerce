# Start your image with a node base image
FROM node:20-alpine
WORKDIR /app
COPY . .
EXPOSE 3000

