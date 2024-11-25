import Router from "./pages";
import { Normalize } from "styled-normalize";
import { useEffect } from "react";
import useCartStore from "./store/useCartStore";

function App() {
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
}

export default App;
