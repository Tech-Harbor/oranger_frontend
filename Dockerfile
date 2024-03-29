FROM node:20.9 AS builder

WORKDIR /app

COPY package.json package-lock.json ./


RUN npm install

COPY . .


RUN npm run build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
