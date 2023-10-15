FROM node:slim

WORKDIR /books-app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

USER node

EXPOSE 4000

CMD ["node", "server.js"]

