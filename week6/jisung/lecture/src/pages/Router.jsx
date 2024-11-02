import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./page/Page";
import Home from "./home/Home";

// 컴포넌트 외부에서 라우터 정의
const router = createBrowserRouter([
    {
        path: "/", // http://localhost:5174/ 일 때 
        element: <Home /> // Home 컴포넌트로 연결
    },
    {
        path: "/page", // http://localhost:5174/page 일 때
        element: <Page /> // Page 컴포넌트로 연결
    }
]);

const Router = () => {
    return <RouterProvider router={router} />;
}

export default Router;
