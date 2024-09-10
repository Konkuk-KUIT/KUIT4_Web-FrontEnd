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
</head>
<body>
  <h1>Projects</h1>
  <ul>
`;

// 주차별로 디렉토리를 탐색
const weeks = fs.readdirSync(baseDir);
weeks.forEach((week) => {
  const weekPath = path.join(baseDir, week);
  if (fs.lstatSync(weekPath).isDirectory()) {
    htmlContent += `<li>${week}<ul>\n`;

    // 주차별 하위 프로젝트 탐색
    const projects = fs.readdirSync(weekPath);
    projects.forEach((project) => {
      const projectPath = path.join(weekPath, project);
      if (fs.lstatSync(projectPath).isDirectory()) {
        htmlContent += `<li><a href="/${week}/${project}">${project}</a></li>\n`;
      }
    });

    htmlContent += `</ul></li>\n`;
  }
});

htmlContent += `
  </ul>
</body>
</html>
`;

// 생성된 HTML을 'build/index.html'에 작성
fs.writeFileSync(path.join(baseDir, "index.html"), htmlContent);

console.log("index.html created successfully.");
