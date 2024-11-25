import StatusBar from '../../components/StatusBar/StatusBar';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import StoresList from '../../components/StoresList/StoresList';
import OrderBar from '../../components/OrderBar/OrderBar';

const Stores = () => {
  return (
    <>
      <StatusBar />
      <HeaderBar backTo={true}/>
      <StoresList />
      <OrderBar />
    </>
  );
};
export default Stores;