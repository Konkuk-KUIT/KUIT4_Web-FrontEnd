import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./Cart/Cart";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";
import Home from "./Home/Home";
import Category from "./category/Category";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    // 루트 경로를 설정하지 않으면 앱이 처음 로드될 때 표시할 기본 페이지를
    // 찾지 못해 오류가 발생할 수 있음
    {
      path: "/category",
      element: <Category />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/store/:storeId",
      element: <Store />,
    },
    {
      path: "/stores",
      element: <Stores />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
