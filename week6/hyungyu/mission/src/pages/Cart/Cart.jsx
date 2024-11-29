import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import ShowSelectedMenus from "./ShowSelectedMenus/ShowSelectedMenus";

const Cart = () => {
  return(
    <div className={styles.container}>
      <div className={styles.selectedMenus}>
        <div className={styles.storeInfo}>
          <span className={styles.storeName}>셀로리 한남점</span>
          <span className={styles.priceError}>
            최소금액 미달
            <img src="./warning.svg" alt="warningSVG" />
          </span>
        </div>
        <ShowSelectedMenus />
      </div>
      <div className={styles.getMore}>
        <Link className={styles.getMoreTextLink}>
          <div className={styles.getMoreTextBox}>
            더 담기
            <img src="./getMoreBtn.svg" alt="getMoreBtnSVG" />
          </div>
        </Link>
      </div>
      <div className={styles.orderInfo}>
        <div className={styles.orderPrice}>
          <span className={styles.orderPriceText}>주문금액</span>
          <span className={styles.orderPricePrice}>10,600원</span>
        </div>
        <div className={styles.deliveryFee}>
          <span className={styles.deliveryFeeText}>배달요금</span>
          <span className={styles.deliveryFeePrice}>2,000원</span>
        </div>
        <div className={styles.totalPrice}>
          <span className={styles.totalPriceText}>총 결제금액</span>
          <span className={styles.totalPricePrice}>12,600원</span>
        </div>
      </div>
      <div className={styles.cancleOrder} onClick={()=>{}}>주문취소</div>
    </div>
  );
};

export default Cart;
