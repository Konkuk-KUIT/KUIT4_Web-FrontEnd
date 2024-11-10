import Order from "../../components/Order/Order";
import CartInfo from "../../components/CartInfo/CartInfo";
import HeaderBar from "../../components/HeaderBar/HeaderBar";

const Cart = () => {
    return (
      <>
      <HeaderBar backTo={true} orderCancel={true}/>
      <CartInfo />
      <Order />
      </>
    );
  };
  
  export default Cart;
  