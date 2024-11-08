import { useParams } from "react-router-dom";
import styles from "./Store.module.css";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import stores from "../../models/stores";
import TopBar from "../../components/TopBar/TopBar";

const Store = () => {
  const { id } = useParams();
  const store = stores.find((store) => store.id.toString() === id);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <TopBar />
        <div className={styles.header}>
          <h1 className={styles.title}>{store.name}</h1>
          <div className={styles.info}>
            <span className={styles.rating}>★</span>
            <span className={styles.ratingNum}> {store.rate}</span>
            <span className={styles.reviewCount}>
              리뷰 {store.reviewCnt.toLocaleString()}
            </span>
          </div>
          <div className={styles.deliveryInfo}>
            <span>결제방법 토스결제만 현장결제 안됨</span>
            <span className={styles.deliveryPrice}>
              최소주문 {store.minDeliveryPrice.toLocaleString()}원
            </span>
            <span>
              배달시간 약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
            </span>
          </div>
        </div>
        <h1 className={styles.pageTitle}>샐러드</h1>
        <div className={styles.menuList}>
          {store.menus.map((menu) => (
            <MenuItem key={menu.id} menu={menu} />
          ))}
        </div>
      </div>
      <OrderBar store={store} menus={[]} />
    </>
  );
};

export default Store;
