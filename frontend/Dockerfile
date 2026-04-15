FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-alpine
WORKDIR /app

RUN npm install -g serve@latest

COPY --from=build /app/dist/ /var/www/html/

EXPOSE 80

CMD ["serve", "-s", "/var/www/html", "-l", "80"]


# FROM node:24-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# FROM node:24-alpine
# WORKDIR /app

# # Install serve for static hosting + mysql2 for migration
# RUN npm install -g serve@latest
# RUN npm install mysql2

# # Copy built frontend files
# COPY --from=build /app/dist/ /var/www/html/

# # Copy DB migration files
# COPY migrate.cjs db.json ./

# EXPOSE 80

# # Run migration THEN serve static files
# CMD ["sh", "-c", "node migrate.cjs && serve -s /var/www/html -l 80"]
