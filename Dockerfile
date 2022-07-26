FROM node:16.13.1

WORKDIR /app
COPY . .
RUN yarn install

EXPOSE 9002

ENTRYPOINT ["yarn", "start"]
