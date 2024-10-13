# 1. Base image for Spring Boot, MySQL, and Node.js
FROM ubuntu:22.04 AS base

# Set non-interactive mode for apt-get
ENV DEBIAN_FRONTEND=noninteractive

# 2. Install necessary packages
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    mysql-server \
    nginx \
    supervisor && \
    apt-get clean

WORKDIR /app
COPY . /app

RUN mkdir -p /var/lib/mysql /var/run/mysqld /etc/mysql/conf.d /var/www/html /var/www/html/static/css /var/www/html/static/js && \
    chown -R mysql:mysql /var/lib/mysql /var/run/mysqld /etc/mysql

COPY my.cnf /etc/mysql/my.cnf
RUN service mysql start && \
    mysql -e "CREATE DATABASE IF NOT EXISTS mycompany;" && \
    mysql -e "GRANT ALL PRIVILEGES ON mycompany.* TO 'root'@'localhost';" && \
    mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mymysql';"

# 6. Nginx Setup for React app
# COPY nginx.conf /etc/nginx/nginx.conf
COPY ./build/index.html /var/www/html/index.html
COPY ./build/static/css/main.f855e6bc.css /var/www/html/static/css/main.f855e6bc.css
COPY ./build/static/css/main.f855e6bc.css.map /var/www/html/static/css/main.f855e6bc.css.map
COPY ./build/static/js/453.b292cf35.chunk.js /var/www/html/static/js/453.b292cf35.chunk.js
COPY ./build/static/js/453.b292cf35.chunk.js.map /var/www/html/static/js/453.b292cf35.chunk.js.map
COPY ./build/static/js/main.db852a2e.js /var/www/html/static/js/main.db852a2e.js
COPY ./build/static/js/main.db852a2e.js.LICENSE.txt /var/www/html/static/js/main.db852a2e.js.LICENSE.txt
COPY ./build/static/js/main.db852a2e.js.map /var/www/html/static/js/main.db852a2e.js.map 


COPY supervisord.conf /etc/supervisord.conf

EXPOSE 80 8082 3306

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]