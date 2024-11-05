import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Page from "./page/Page";
import Home from "./home/Home";
import PageId from "./PageId/PageId"

const Layout = () => {
    return (
        <>
            <header style={{backgroundColor:"green"}}>헤더입니다</header>
            <Outlet /> 
            {/* Outlet: Layout으로 들어오는 라우터를 자식 라우터로 보낼 수 있음 */}
            {/* Layout으로 들어오는 라우터를 Outlet 부분에 보여주는 것 */}
        </>
    )
}

const Router = () => {
    const router = createBrowserRouter([
        {
            // Layout 컴포넌트를 가장 상단에 띄우고
            // 이 Layout의 children으로 다른 컴포넌트들이 라우터로 들어감
            // -> Layout 컴포넌트는 자식 컴포넌트로 이동해도 계속 고정되어 있음
    
            element: <Layout />,
            children: [
                {
                    path: "/", // http://localhost:5174/ 일 때 
                    element: <Home /> // Home 컴포넌트로 연결
                },
                {
                    path: "/page", // http://localhost:5174/page 일 때
                    element: <Page /> // Page 컴포넌트로 연결
                },
                {
                    path: "/page/:pageId",
                    // path parameter를 붙일 때는 경로 뒤에 :를 붙이고 그 뒤에 path parameter를 주면 됨  
                   // http://localhost:5173/page/아무문자열 과 같이 연결 가능
                    element: <PageId />
                }
            ]
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;
