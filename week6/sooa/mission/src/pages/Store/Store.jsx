import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import stores from "../../models/stores";
import { Wrapper } from "../../components/Wrapper.styles";
import { SubTitle } from "./Store.styles";
import HeaderBar from "../../components/HeaderBar";
import StoreDescription from "./StoreDescription";

const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((store) => store.id.toString() === storeId);

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
