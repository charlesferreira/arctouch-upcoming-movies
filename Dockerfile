FROM node:8.16.0-alpine as builder
COPY package.json ./
RUN yarn install && mkdir -p /usr/src/frontend && mv ./node_modules ./usr/src/frontend
WORKDIR /usr/src/frontend
COPY . .
RUN yarn run build --prod --build-optimizer
FROM nginx:1.15.12-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
                                  
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/frontend/dist /usr/share/nginx/html
COPY --from=builder /usr/src/frontend/entrypoint.sh /usr/share/nginx/
RUN chmod +x /usr/share/nginx/entrypoint.sh
CMD ["/bin/sh", "/usr/share/nginx/entrypoint.sh"]
