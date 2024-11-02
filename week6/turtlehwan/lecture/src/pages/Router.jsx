import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Page from "./Page/Page";
import PageId from "./PageId/PageId";
import Home from "./home/Home";

const Layout = () => {
  return (
    <>
      <header style={{ backgroundColor: "green" }}>헤더입니다</header>
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
