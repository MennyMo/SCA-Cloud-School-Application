FROM node:16.13.2
WORKDIR /docker
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]