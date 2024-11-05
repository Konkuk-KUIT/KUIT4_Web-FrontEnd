import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import stores from "../../models/stores";
import Button from "../../components/Button";
import styles from "./Store.module.css";

const onClickButton = () => {
  return <Link to="/">Home으로</Link>;
};

const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((store) => store.id.toString() === storeId);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <div className={styles.headerArrow}>a</div>
      <h1 className={styles.storeName}>{store.name}</h1>
      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
