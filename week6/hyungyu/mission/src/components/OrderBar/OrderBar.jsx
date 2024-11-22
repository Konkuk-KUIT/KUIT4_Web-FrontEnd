import Button from "../Button";
import { Link } from "react-router-dom";
import styles from "./OrderBar.module.css";

const OrderBar = () => {
  const menus = [];
  const store = null;
  const handleOrder = () => {};

  return (
    <div className={styles.orderBarContainer}>
      <div className={styles.orderInfo}>
        <div className={styles.totalPriceWords}>총 주문금액</div>
        <div className={styles.totalPrice}>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</div>
      </div>
      <Button onClick={handleOrder} type="button" size="lg">
        <Link to="/cart" className={styles.orderBtnText}>{store?.name && `${store.name}에서 `}주문하기</Link>
      </Button>
    </div>
  );
};

export default OrderBar;
