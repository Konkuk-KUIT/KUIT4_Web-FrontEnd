import { createRoot } from "react-dom/client";
import './index.css';
import Home from "./Home";

const root = createRoot(document.getElementById("app"));

root.render(<Home />);
