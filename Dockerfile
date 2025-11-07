FROM nginx:latest
WORKDIR /app

COPY index.html /usr/share/nginx/html/index.html
COPY matthewandhilary.jpg /usr/share/nginx/html/matthewandhilary.jpg
COPY nginx.backend.conf /etc/nginx/conf.d/backend.conf
COPY sakura.css /usr/share/nginx/html/sakura.css
COPY slideshow.html /usr/share/nginx/html/slideshow.html
