FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 5000
RUN yarn build
ENV NODE_ENV production
CMD ["yarn", "start"]
