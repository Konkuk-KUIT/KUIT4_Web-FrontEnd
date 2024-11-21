import Router from "./pages/Router";
import { Normalize } from "styled-normalize";
import { useEffect } from "react";
import useCartStore from "./store/cartStore";

const App = () => {
  const fetchCart = useCartStore((state) => state.fetchCart);
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <>
      <Normalize />
      <Router />
    </>
  );
};

export default App;
