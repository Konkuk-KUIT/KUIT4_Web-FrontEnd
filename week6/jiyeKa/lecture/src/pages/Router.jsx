import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import Page from "./page/Page";
import PageId from "./PageId/PageId";

const Layout = () => {
    return (
        <>
            <header style={{backgroundColor:"green"}}>헤더입니다</header>
            <Outlet/>

        </>
    )
}

const Router = () => {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/", 
                    element: <Home />
                },
                {
                    path: "/page",
                    element: <Page />
                },
                {
                    path: "/page/:pageId",
                    element: <PageId/>
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router