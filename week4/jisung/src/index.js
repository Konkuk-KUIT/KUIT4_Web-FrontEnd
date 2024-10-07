import { createRoot } from "react-dom/client";
import Home from "./Home"; // 현재 폴더에서 Home이라는 이름의 파일을 가져옴

const root = createRoot(document.getElementById("app"));

root.render(<Home />); // 가져온 Home 파일을 렌더링
