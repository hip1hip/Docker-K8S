const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = 3000;
const FILE_DIR = path.join(__dirname, "files");

// 미들웨어 설정
app.use(express.static("public")); // 정적 파일 제공
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 폴더가 없으면 생성
if (!fs.existsSync(FILE_DIR)) {
  fs.mkdirSync(FILE_DIR);
}

// 파일에 데이터 쓰기
app.post("/write", (req, res) => {
  const content = req.body.content;
  const filePath = path.join(FILE_DIR, "data.txt");

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).send("Error writing to file");
    }
    res.send("File written successfully");
  });
});

// 파일에서 데이터 읽기
app.get("/read", (req, res) => {
  const filePath = path.join(FILE_DIR, "data.txt");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(data);
  });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
