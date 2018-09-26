FROM node:8.11.1

ENV HOME /home/node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json /home/node/app
COPY package-lock.json /home/node/app

RUN npm install

COPY . /home/node/app

CMD ["node", "index.js"]
