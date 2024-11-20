import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import Page from "./page/page";
import PageId from "./page/pageId/PageId";

const Layout = () => {
    return (
        <>
            <header>This is a header</header>
            <Outlet />
        </>
    );
};

const Router = () => {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                }, {
                    path: "/page",
                    element: <Page />
                }, {
                    path: "/page/:pageId",
                    element: <PageId />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
};
export default Router;