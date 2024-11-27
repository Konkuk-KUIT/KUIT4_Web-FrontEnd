import HeaderBar from "../../components/HeaderBar/HeaderBar";
import StoreList from "../../components/StoreList/StoreList";
import OrderBar from "../../components/OrderBar/OrderBar";

const Stores = () => {
    return (
      <>
      <HeaderBar backTo={true}/>
      <StoreList />
      <OrderBar />
    </>
    );
  };
  
  export default Stores;
  