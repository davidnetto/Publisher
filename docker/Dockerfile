FROM node:14.17.1-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ .

RUN rm -rf dist

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]