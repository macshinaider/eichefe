FROM node:alpine

WORKDIR /ap


COPY . .

RUN npm i


RUN npm run build



CMD [ "npm", "run", "start" ]