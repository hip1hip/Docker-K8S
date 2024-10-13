# Node.js 기본 이미지 사용
FROM node

# 애플리케이션 디렉토리 생성
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package.json ./

# 프로젝트의 의존성 설치
RUN npm install

# 애플리케이션 소스 복사
COPY . .

# 앱을 실행할 포트 설정
EXPOSE 80

# 애플리케이션 시작 명령어
CMD [ "npm", "start" ]
