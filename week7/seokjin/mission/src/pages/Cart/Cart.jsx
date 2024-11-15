import styled from 'styled-components';
import Top from "../../components/Top/Top";
import OrderList from '../../components/OrderList/OrderList';
import HomeIndicator from '../../components/HomeIndicator/HomeIndicator';
import MoreButton from '../../components/MoreButton/MoreButton';
import PriceInfo from '../../components/PriceInfo/PriceInfo';
import PayButtonGrid from '../../components/PayButtonGrid/PayButtonGrid';
const GraySpace = styled.div`
  width: 390px;
  height: 16px;
  background: #F2F4F6;
`

export { GraySpace };

const Cart = () => {
  return (
  <>
  <Top />
  <GraySpace/>
  <OrderList/>
  <MoreButton />
  <GraySpace/>
  <PriceInfo />
  <PayButtonGrid />
  <HomeIndicator />
  </>
  );
};

export default Cart;
