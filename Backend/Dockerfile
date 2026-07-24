FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2000

CMD ["npx", "json-server", "db.json", "--host", "0.0.0.0", "--port", "2000"]
