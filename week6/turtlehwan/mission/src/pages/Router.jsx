import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter();

  return <RouterProvider router={router} />;
};

export default Router;
