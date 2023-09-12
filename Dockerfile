# build environment
FROM node:19.4.0-alpine AS build
WORKDIR /react_portfolio
ENV PATH /react_portfolio/node_modules/.bin:$PATH
COPY package.json /react_portfolio/
COPY package-lock.json /react_portfolio/
RUN npm i --legacy-peer-deps --silent
COPY . /react_portfolio/
CMD ["npm", "run", "build"]

# production environment
FROM nginx:stable
EXPOSE 80
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=build react_portfolio/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]