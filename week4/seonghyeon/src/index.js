import React from 'react';
import { createRoot } from "react-dom/client";
import Home from "./Home"; // Home을 기본으로 가져오기


const root = createRoot(document.getElementById("app"));
root.render(<Home/>); // 
