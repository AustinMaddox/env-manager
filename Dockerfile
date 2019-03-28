FROM node:11.10.0-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install
