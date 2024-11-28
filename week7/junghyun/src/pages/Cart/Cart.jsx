import StatusBar from "../../components/StatusBar/StatusBar";
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import CartInfo from '../../components/CartInfo/CartInfo';
import OrderConfirmation from '../../components/OrderConfirmation/OrderConfirmation';

const Cart = () => {
  return (
    <>
      <StatusBar />
      <HeaderBar backTo={true} orderCancel={true}/>
      <CartInfo />
      <OrderConfirmation />
    </>
  );
};
export default Cart;