import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./Cart/Cart";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";
import Home from "./Home/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/store",
      element: <Store />
    },
    {
      path: "/stores",
      element: <Stores />
    }
  ])

  return <RouterProvider router={router} />;
};

export default Router;
