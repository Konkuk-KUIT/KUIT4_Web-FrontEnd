import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Page/Page";
import PageId from "./PageId/PageId";
import Home from "./Home/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/page",
      element: <Page />,
    },
    {
      path: "/page/:pageId",
      element: <PageId />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
