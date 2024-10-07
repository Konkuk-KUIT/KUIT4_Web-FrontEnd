import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot(document.getElementById("app"));

root.render(<h1>hello!</h1>);


root.render(<App/>);