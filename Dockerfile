FROM node:12

WORKDIR /usr/src/gdgapp

COPY package*json ./

RUN npm install

COPY . .

CMD ["npm","start"]