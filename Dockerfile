FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./

# RUN npm install --global yarn
RUN yarn install

COPY . .

EXPOSE 4000

CMD [ "yarn", "build" ]