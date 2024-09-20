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
    <title>KUIT 4th FE</title>
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
      <h1>KUIT 4th Frontend Workbook 📗</h1>
        <a href="https://confusion-ping-ae2.notion.site/Web-96c8455a0808433c962c7d6c85aac980?pvs=4">
          <span class="tossface">📚</span>WEB 조별 워크북 제출 페이지
        </a>
      <h1>KUIT 4th Frontend Missions ✨</h1>
      <ul>
`;

// 주차별로 디렉토리를 탐색
const weeks = fs.readdirSync(baseDir);

// 재귀적으로 폴더 내 파일/폴더를 탐색
function exploreDirectory(currentPath, relativePath) {
  let folderContent = "";

  // 현재 디렉토리의 파일 목록 가져오기
  const items = fs.readdirSync(currentPath);
  let hasIndex = false;

  // 현재 폴더에 index.html이 있는지 확인
  if (items.includes("index.html")) {
    hasIndex = true;
    folderContent += `<li>
      <a href="/KUIT4_Web-FrontEnd/${relativePath}">
        <span class="tossface">📄</span> ${path.basename(relativePath)}
      </a>
    </li>\n`;
  }

  if (!hasIndex) {
    folderContent += `<li class="folder">
      <span class="tossface">📂</span> ${path.basename(relativePath)}
      <ul>\n`;

    // 하위 폴더 및 파일들 탐색
    items.forEach((item) => {
      const itemPath = path.join(currentPath, item);
      const relativeItemPath = path.join(relativePath, item);

      // 디렉토리라면 재귀적으로 탐색
      if (fs.lstatSync(itemPath).isDirectory()) {
        folderContent += exploreDirectory(itemPath, relativeItemPath);
      }
    });

    folderContent += `</ul></li>\n`;
  }

  return folderContent;
}

// 주차별 폴더 탐색
weeks.forEach((week) => {
  const weekPath = path.join(baseDir, week);

  // 주차 폴더가 디렉토리인 경우만 처리
  if (fs.lstatSync(weekPath).isDirectory()) {
    htmlContent += exploreDirectory(weekPath, week);
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
