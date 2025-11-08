FROM nginx:latest
WORKDIR /app

COPY jquery-3.7.1.slim.min.js /usr/share/nginx/html/jquery-3.7.1.slim.min.js
COPY matthewandhilary.jpg /usr/share/nginx/html/matthewandhilary.jpg
COPY node_modules /usr/share/nginx/html/node_modules
COPY sakura.css /usr/share/nginx/html/sakura.css

COPY index.html /usr/share/nginx/html/index.html
COPY slideshow.html /usr/share/nginx/html/slideshow.html

COPY nginx.conf /etc/nginx/conf.d/default.conf
