import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import Page from "./page/Page";

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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
