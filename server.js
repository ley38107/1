// server.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 정적 파일 서비스 (public 폴더에 있는 파일들을 브라우저에서 접근 가능하게 함)
app.use(express.static('public'));

// 루트 주소('/')로 들어왔을 때 index.html 파일을 응답으로 보냄
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});