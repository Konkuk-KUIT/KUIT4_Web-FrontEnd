import HeaderBar from "../../components/HeaderBar/HeaderBar";
import StoreList from "../../components/StoreList/StoreList";
import Order from "../../components/Order/Order";

const Stores = () => {
    return (
      <>
      <HeaderBar backTo={true}/>
      <StoreList />
      <Order />
    </>
    );
  };
  
  export default Stores;
  