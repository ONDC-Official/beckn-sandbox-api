FROM node:18.14.0-alpine3.17

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
COPY . ./


RUN npm install
#RUN npm i -g pm2
RUN npm run build

EXPOSE 4000
CMD [ "npm", "start" ]
