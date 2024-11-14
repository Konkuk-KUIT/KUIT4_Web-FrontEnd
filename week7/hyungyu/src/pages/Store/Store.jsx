import { useParams } from "react-router-dom";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";
import styles from "./Store.module.css";
import useCartStore from "../../store/cartStore";
import { useEffect } from "react";

const Store = () => {
  const { storeId } = useParams();
  const setStore = useCartStore((state) => state.setStore);
  const store = stores.find((store) => store.id.toString() === storeId);

  useEffect(() => {
    if(store){
      setStore(store);
    }
  }, []);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.storeName}>{store.name}</h1>
        <div className={styles.storeInfo}>
          <div className={styles.rateAndReview}>
            <img src="/star.svg" alt="starImg" className={styles.star} />
            <span className={styles.rateInfo}>{store.rate} </span>
            <span className={styles.reviewInfo}>리뷰{store.reviewCnt}</span>
          </div>
          <div className={styles.storeInfoRow0}>
            <span className={styles.storeInfoCol}>결제방법</span>
            <span className={styles.storeInfoCol}>토스결제만 현장결제 안됨</span>
          </div>
          <div className={styles.storeInfoRow1}>
            <span className={styles.storeInfoCol}>최소주문</span>
            <span className={styles.storeInfoCol}>{store.minDeliveryPrice}원</span>
          </div>
          <div className={styles.storeInfoRow2}>
            <span className={styles.storeInfoCol}>배달시간</span>
            <span className={styles.storeInfoCol}>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</span>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.foodCategory}>샐러드</div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
    </div>
  );
};

export default Store;
