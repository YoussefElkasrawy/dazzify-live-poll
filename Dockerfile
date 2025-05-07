FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY .env ./

RUN npm install

COPY . .

ENV PORT=443

EXPOSE 443

CMD ["npm", "start"] 