import { createRoot } from "react-dom/client";
import App from "./App"	;		

const root = createRoot(document.getElementById("app"));
			
// root.render(<h1>Hello!</h1>);
root.render(<App />);