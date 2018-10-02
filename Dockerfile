FROM node:8.11.1

ENV HOME /home/node \
    BASH_ENV=/usr/local/bin/scl_enable \
    ENV=/usr/local/bin/scl_enable \
    PROMPT_COMMAND=". /usr/local/bin/scl_enable"

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json /home/node/app
COPY package-lock.json /home/node/app

RUN npm install

COPY . /home/node/app

CMD ["node", "index.js"]
