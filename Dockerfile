FROM nginx:latest
WORKDIR /app
COPY index.html /usr/share/nginx/html/index.html
COPY matthewandhilary.jpg /usr/share/nginx/html/matthewandhilary.jpg
COPY sakura.css /usr/share/nginx/html/sakura.css
