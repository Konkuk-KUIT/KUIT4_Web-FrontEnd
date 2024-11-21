import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Page from "./Page/Page";
import PageId from "./page/PageId";

// 중첩 라우터 (계속해서 같은 부분을 보여주고 싶다면?) : 라우터를 자식라우터로 계속 보내줌
const Layout = () => {
    return (
        <>
            <header style={{backgroundColor: "green"}}>헤더입니다</header>
            <Outlet />
        </>
    );
};

// 라우터의 배열 => 사용자가 갈 수 있는 경로의 배열...
const Router = () => {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [{
                path: "/",
                element: <Home />
            },
            {
                path: "/page",
                element: <Page />
            },
            {
                path: "/page/:pageId",
                element: <PageId />
            }],
        },
    ]);

    return <RouterProvider router={router} />
};

export default Router;
