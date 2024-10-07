// index.js: React 애플리케이션의 진입점
// createRoot함수를 통해 특정 DOM요소(여기서는 id가 "app"인 div)에 Home 컴포넌트를 렌더링
// -> 브라우저를 DOM에 연결

import { createRoot } from "react-dom/client";
import Home from "./Home"; // 현재 폴더에서 Home이라는 이름의 파일을 가져옴

const root = createRoot(document.getElementById("app"));

root.render(<Home />); // 가져온 Home 파일을 렌더링
