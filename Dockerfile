# build environment
FROM node:19.4.0-alpine AS build
WORKDIR /bozynski_alina_final_site
ENV PATH /bozynski_alina_final_site/node_modules/.bin:$PATH
COPY package.json /bozynski_alina_final_site/
COPY package-lock.json /bozynski_alina_final_site/
RUN npm i --silent
COPY . /bozynski_alina_final_site/
CMD ["npm", "run", "build"]

# production environment
FROM nginx:stable
EXPOSE 80
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=build bozynski_alina_final_site/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]