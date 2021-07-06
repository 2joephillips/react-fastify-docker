FROM node:16-alpine3.11
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start