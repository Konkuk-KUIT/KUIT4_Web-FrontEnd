import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import stores from "../../models/stores";
import { Wrapper } from "../../components/Wrapper.styles";
import { SubTitle } from "./Store.styles";
import HeaderBar from "../../components/HeaderBar";
import StoreDescription from "./StoreDescription";
import useCartStore from "../../store/useCartStore";
import { useEffect } from "react";

const Store = () => {
  const { storeId } = useParams();
  const setStore = useCartStore((state) => state.setStore);
  const store = useCartStore((state) => state.store);
  const findStore = stores.find(
    (findStore) => findStore.id.toString() === storeId
  );

  useEffect(() => {
    if (findStore) {
      setStore(findStore);
    }
  }, [findStore]);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <Wrapper>
      <HeaderBar arrow={true} cancel={false} />
      <StoreDescription store={store} />
      <SubTitle>샐러드</SubTitle>
      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </Wrapper>
  );
};

export default Store;
