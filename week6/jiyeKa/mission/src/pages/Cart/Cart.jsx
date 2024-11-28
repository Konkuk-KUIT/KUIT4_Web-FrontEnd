import Order from "../../components/Order/Order";
import CartInfo from "../../components/CartInfo/CartInfo";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import useCartStore from "../../store/cartStore";

const Cart = () => {
    const store = useCartStore((state) => state.store);
    const menu = useCartStore((state) => state.menu);

    return (
      <>
      <HeaderBar backTo={true} orderCancel={true}/>
      <CartInfo />
      <Order />
      </>
    );
  };
  
  export default Cart;
  