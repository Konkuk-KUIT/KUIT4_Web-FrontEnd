import { useParams } from "react-router-dom";

import StoreInfo from "../../components/StoreInfo/StoreInfo";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";

const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((store) => store.id.toString() === storeId);

  // if (!store) {
  //   return <div>가게를 찾을 수 없어요 🥺</div>;
  // }

  return (
    <>
    <HeaderBar backTo={true}/>
    <StoreInfo />
    <OrderBar />
    </>
  );
};

export default Store;
