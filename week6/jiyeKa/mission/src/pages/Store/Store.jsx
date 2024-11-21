import { useParams } from "react-router-dom";

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import StoreInfo from "../../components/StoreInfo/StoreInfo";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/db.json";
import useCartStore from "../../store/cartStore";
import { useEffect } from "react";

const Store = () => {
  const { storeId } = useParams();
  const setStore = useCartStore((state) => state.setStore);
  const store = stores.find((store) => store.id.toString() === storeId);

  useEffect(() => {
    if (store){
      setStore(store);
    }
  }, []) 
  /* 
  useEffect는 콜백함수, 의존성 배열로 사용. 
  배열에는 상태 넣음 -> [] 배열이 변화되면 콜백함수 호출됨
  만약 배열 비워두면? -> 컴포넌트가 마운트 될 때,,, dom에 그려진 순간
  */
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
