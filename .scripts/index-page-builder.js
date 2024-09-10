const fs = require("fs");
const path = require("path");

// 'build' 폴더를 기준으로 탐색 시작
const baseDir = "../build";

// HTML 템플릿을 시작합니다.
let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Index</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    h1 {
      text-align: center;
      color: #4CAF50;
    }
    ul {
      list-style-type: none;
      padding-left: 20px;
    }
    ul ul {
      padding-left: 20px;
      border-left: 1px solid #ccc;
    }
    li {
      margin: 5px 0;
    }
    a {
      text-decoration: none;
      color: #4CAF50;
      font-weight: bold;
    }
    a:hover {
      color: #333;
    }
    .folder::before {
      content: "📁 ";
      font-size: 16px;
    }
    .file::before {
      content: "📄 ";
      font-size: 16px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Project Index</h1>
    <ul>
`;

// 주차별로 디렉토리를 탐색
const weeks = fs.readdirSync(baseDir);
weeks.forEach((week) => {
  const weekPath = path.join(baseDir, week);
  if (fs.lstatSync(weekPath).isDirectory()) {
    htmlContent += `<li class="folder">${week}<ul>\n`;

    // 주차별 하위 프로젝트 탐색
    const projects = fs.readdirSync(weekPath);
    projects.forEach((project) => {
      const projectPath = path.join(weekPath, project);
      if (fs.lstatSync(projectPath).isDirectory()) {
        htmlContent += `<li class="file"><a href="/${week}/${project}">${project}</a></li>\n`;
      }
    });

    htmlContent += `</ul></li>\n`;
  }
});

htmlContent += `
    </ul>
  </div>
</body>
</html>

`;

// 생성된 HTML을 'build/index.html'에 작성
fs.writeFileSync(path.join(baseDir, "index.html"), htmlContent);

console.log("index.html created successfully.");
