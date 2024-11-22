import { useEffect } from "react";
import Router from "./pages/Router";
import { Normalize } from "styled-normalize";
import useCartStore from "./store/cartStore";

const App = () => {
  const fetchCart = useCartStore(state => state.fetchCart);
  
  useEffect(()=> {
    fetchCart();
  }, []);

  return (
    <div style={{ width: "390px", margin: "0 auto" }}>
      <Normalize />
      <Router />
    </div>
  );
};

export default App;
