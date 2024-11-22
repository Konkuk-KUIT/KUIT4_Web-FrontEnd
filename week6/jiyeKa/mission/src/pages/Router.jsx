import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";


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
        path: "/stores",
        element: <Stores />
    },
    {
      path: "/stores/:storeId",
      element: <Store />
  } 
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
