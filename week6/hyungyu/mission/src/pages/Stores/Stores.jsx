import { Link } from "react-router-dom";
import stores from "../../models/stores";
import styles from "./Stores.module.css";

const Stores = () => {
  return (
    <div>
      <h2 className={styles.header}>샐러드</h2>
      {stores.map((store) => {
        return(
          <div className={styles.container} key={store.id}>
            <div className={styles.storeImg}>
              <Link to={`/store/${store.id}`} className={styles.storeImgLink}>
                <img src="http://via.placeholder.com/54x54" alt="storeImg" />
              </Link>
            </div>
              <div className={styles.storeInfo}>
                <Link to={`/store/${store.id}`} className={styles.storeLink}>
                  <p className={styles.storeTitle}>
                    {store.id}위<br />
                    {store.name}<br />
                  </p>
                  <p className={styles.storeDetails}>
                    ★ {store.rate} ({store.reviewCnt})<br />
                    {store.minDeliveryTime}분~{store.maxDeliveryTime}분 • 배달비 {store.deliveryFee}원
                  </p>
                </Link>
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stores;
