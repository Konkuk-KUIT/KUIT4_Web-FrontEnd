const fs = require('fs');
const path = require('path');

// 루트 디렉토리 설정
const rootDir = process.cwd(); // 현재 작업 디렉토리

// 주어진 주별 디렉토리 범위 설정
const weekDirs = Array.from({ length: 10 }, (_, i) => `week${i + 1}`); // ["week1", "week2", ..., "week10"]

// /build 디렉토리 생성
const buildDir = path.join(rootDir, 'build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// 각 주별 디렉토리 탐색
weekDirs.forEach(weekDir => {
  const weekPath = path.join(rootDir, weekDir);

  if (fs.existsSync(weekPath) && fs.lstatSync(weekPath).isDirectory()) {
    // 주별 디렉토리 내의 하위 디렉토리 탐색
    fs.readdirSync(weekPath).forEach(mission => {
      const missionDir = path.join(weekPath, mission);

      // 하위 디렉토리가 존재하고 package.json이 없을 경우
      if (fs.existsSync(missionDir) && fs.lstatSync(missionDir).isDirectory() && !fs.existsSync(path.join(missionDir, 'package.json'))) {
        console.log(`Found directory without package.json: ${missionDir}`);
        
        // 대상 빌드 디렉토리 설정
        const targetDir = path.join(buildDir, weekDir, mission);
        
        // 디렉토리 및 파일 복사
        copyDirectory(missionDir, targetDir);
        console.log(`Copied ${missionDir} to ${targetDir}`);
      }
    });
  }
});

// 디렉토리 복사 함수 정의
function copyDirectory(src, dest) {
  // 디렉토리 생성
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // 디렉토리 내의 파일 및 서브디렉토리 복사
  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}
