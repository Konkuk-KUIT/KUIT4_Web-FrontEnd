import StatusBar from "../../components/StatusBar/StatusBar";
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import StoreInfo from '../../components/StoreInfo/StoreInfo';
import OrderBar from '../../components/OrderBar/OrderBar';

const Store = () => {
  return (
    <>
      <StatusBar />
      <HeaderBar backTo={true}/>
      <StoreInfo />
      <OrderBar />
    </>
  );
};
export default Store;