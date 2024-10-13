const express = require("express");
const app = express();
const port = 5173;

app.get("/", (req, res) => {
  res.send("<h1>Hello World - version 1</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
