import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import ScrollContainer from "../../components/ScrollContainer/ScrollContainer";
import stores from "../../models/stores";

const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((store) => store.id.toString() === storeId);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <h1>{store.name}</h1> 
      <ScrollContainer>
      <div>      
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      </ScrollContainer>
      <OrderBar />
    </div>
  );
};

export default Store;
