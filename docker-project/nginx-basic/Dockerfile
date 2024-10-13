# FROM nginx
# COPY static-html-directory /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 8080
# 명시적으로 알려주는거 없어도 됌 , 남이 보기 좋게 
# CMD [ "node" , "app.js" ]# Nginx 이미지를 기반으로 함
FROM nginx

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 정적 파일 복사 (index.html)
COPY index.html /usr/share/nginx/html/index.html

# 8080 포트 노출
EXPOSE 8080

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
