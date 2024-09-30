# Step 1: 우분투 기반 Nginx 이미지 사용
FROM nginx:latest

# Step 2: Nginx 설정 파일 복사 (필요 시)
# COPY nginx.conf /etc/nginx/nginx.conf

# Step 3: 빌드된 React 애플리케이션 파일을 Nginx의 기본 웹 디렉토리로 복사
COPY ./build /usr/share/nginx/html

# Step 4: Nginx 서비스 실행을 위한 포트 80 노출
EXPOSE 80

# Step 5: Nginx 실행 명령
CMD ["nginx", "-g", "daemon off;"]
