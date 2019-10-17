FROM node:10

WORKDIR /usr/srs/app

COPY package *.json./

RUN npm install

COPY . .

EXPOSE 3090

CMD ["npm", "start"]