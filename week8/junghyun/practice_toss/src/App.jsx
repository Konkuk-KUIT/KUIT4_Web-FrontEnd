import Router from "./pages";
import {Normalize} from "styled-normalize";
import useCartStore from "./store/cartStore";
import { useEffect } from "react";

function App() {
  // 왜 App에서 다 Fetch하지 않는가?
  // 브라우저의 한계로 인해 동시에 6개의 요청만 보낼 수 있다
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