FROM node:18.16.1 AS builder

WORKDIR /app

ARG github_token
ENV GITHUB_TOKEN=$github_token

RUN echo registry=https://registry.npmjs.org/ >> ~/.npmrc
RUN echo @bankme-tech:registry=https://npm.pkg.github.com/ >> ~/.npmrc
RUN echo //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN >> ~/.npmrc

COPY package.json yarn.lock tsconfig* nest-cli.json ./

RUN yarn install

COPY . .

RUN yarn add @nestjs/cli

RUN yarn build

FROM node:18.16.1

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Script para esperar o RabbitMQ iniciar antes de iniciar o aplicativo
CMD sleep 10 && node dist/main

# CMD [ "node", "dist/main" ]