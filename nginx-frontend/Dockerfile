FROM nginx

RUN apt-get update && apt-get install vim -y

COPY nginx.conf /etc/nginx/nginx.conf

COPY index.html /etc/nginx/website/index.html

RUN mkdir -p /data/nginx/cache

EXPOSE 80 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]


