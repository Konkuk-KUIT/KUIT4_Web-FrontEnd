import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Page from "./Page/Page";
import PageId from "./PageId/PageId";

const Layout = () => {
    return(
        <>
            <header>헤더입니다.</header>
            <Outlet />
        </>
    )
}


const Router = () => {
    const router = createBrowserRouter([
        {
            element: <Layout/>,
            children:[
                {
                    path: "/",
                    element: <Home /> //children을 받을 수 없음.
                },
                {
                    path: "/page",
                    element: <Page />
                },
                {
                    path: "/page/:pageId",
                    element: <PageId />,
                }
            ]
            
        },
        
    ]);

    return <RouterProvider router={router}/>
}

export default Router;