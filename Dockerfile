FROM node:alpine3.10

WORKDIR /app

COPY . /app

RUN npm i

RUN npm run build

RUN npm prune --production

CMD node server.js

