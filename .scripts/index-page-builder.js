const fs = require("fs");
const path = require("path");

// 'build' 폴더를 기준으로 탐색 시작
const baseDir = "./build";

// HTML 템플릿을 시작합니다.
let htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://cdn.jsdelivr.net" />
    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
    <link
      href="https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css"
      rel="stylesheet"
      type="text/css"
    />
    <title>KUIT FE</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 20px;
        background-color: #fff;
      }
      h1 {
        color: #1a1a1a;
      }
      ul {
        list-style-type: none;
      }
      ul ul {
        padding-left: 20px;
      }
      li {
        margin: 10px 0;
      }
      .folder {
        font-size: 14px;
        color: #1a1a1a;
      }
      a {
        text-decoration: none;
        color: #2c2c2c;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
      }
      .tossface {
        font-family: Tossface;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Kuit Frontend Missions ✨</h1>
      <ul>
`;

// 주차별로 디렉토리를 탐색
const weeks = fs.readdirSync(baseDir);
weeks.forEach((week) => {
  const weekPath = path.join(baseDir, week);
  if (fs.lstatSync(weekPath).isDirectory()) {
    htmlContent += `<li class="folder">
          <span class="tossface">📂</span> ${week}
          <ul>\n`;

    // 주차별 하위 프로젝트 탐색
    const projects = fs.readdirSync(weekPath);
    projects.forEach((project) => {
      const projectPath = path.join(weekPath, project);
      if (fs.lstatSync(projectPath).isDirectory()) {
        htmlContent += `<li class="tossface">
              <a href="/KUIT4_Web-FrontEnd/${week}/${project}"
                ><span class="tossface">📄</span> ${project}</a
              >
            </li>\n`;
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
