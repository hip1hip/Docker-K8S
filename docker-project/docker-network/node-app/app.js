const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

// PostgreSQL 데이터베이스 연결 설정
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'admin',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DB || 'board',
  password: process.env.POSTGRES_PASSWORD || 'admin123',
  port: 5432,
});

const app = express();
app.use(bodyParser.json());

// 게시글 목록 조회
app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 게시글 작성
app.post("/posts", async (req, res) => {
  const { title, content } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 서버 실행
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
