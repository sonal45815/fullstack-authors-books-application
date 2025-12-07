FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install mysql2
RUN npm install -g pm2

COPY . .

EXPOSE 80  # Changed from 80 (works without root)

CMD ["pm2-runtime", "start", "server.js", "--name", "backend-api"]
