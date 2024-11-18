import { useEffect } from "react";
import useCartStore from "./pages/cartStore";
import Router from "./pages/Router";
import { Normalize } from "styled-normalize";

const App = () => {
  const fetchCart = useCartStore((state) => state.fetchCart)

  useEffect(() => {
    fetchCart();
  }, [])

  return (
    <>
      <Normalize />
      <Router />
    </>
  );
};

export default App;
