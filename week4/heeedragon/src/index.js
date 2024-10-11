import { createRoot } from "react-dom/client";
//react가 DOM요소를 제어할 수 있는 root를 만들어낸다
//react 앱에 root가 되는 dom 요소를 지정한다 => root 부터 계층적으로 랜더링!
import App from "./App";

const root = createRoot(document.getElementById("App"));

root.render(<App/>);

