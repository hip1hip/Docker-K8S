# Nginx 이미지를 사용
FROM nginx:alpine

# build 폴더의 내용을 Nginx의 기본 웹 폴더로 복사
COPY ./build /usr/share/nginx/html

# Nginx 포트 노출
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]