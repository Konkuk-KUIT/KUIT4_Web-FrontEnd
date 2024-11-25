import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./home/Home";
import Page from "./page/Page";
import PageId from "./PageId/PageId";

const Router = ()=> {
    const router = createBrowserRouter([
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
            element: <PageId />
        }
      ]);

      return <RouterProvider router={router}/>; 
}

export default Router;