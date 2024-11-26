import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Stores from "../Stores/Stores";
import Store from "../Store/Store";
import Cart from "../Cart/Cart";
import Layout from "./Layout";

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
          path: "/store",
          element: <Stores />,
        },
        {
          path: "/store/:storeId",
          element: <Store />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
