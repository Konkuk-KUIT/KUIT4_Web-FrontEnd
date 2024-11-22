import { useParams } from "react-router-dom";

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import StoreInfo from "../../components/StoreInfo/StoreInfo";
import OrderBar from "../../components/OrderBar/OrderBar";

import useCartStore from "../../store/cartStore";
import { useEffect, useState } from "react";
import { getStore } from "../../apis/stores";

const Store = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState();

  useEffect(() => {
    getStore(storeId).then(value => setStore(value));
  }, [storeId]) 

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <>
    <HeaderBar backTo={true}/>
    <StoreInfo />
    <OrderBar style={{bottom:"0px"}} />
    </>
  );
};

export default Store;
