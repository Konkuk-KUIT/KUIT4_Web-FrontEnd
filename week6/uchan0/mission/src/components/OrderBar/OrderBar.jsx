import Button from "../Button";
import styles from "./OrderBar.module.css";

const OrderBar = () => {
  const menus = [
    {
      price: 12100,
    },
  ];
  const store = null;
  const handleOrder = () => {};

  return (
    <div className={styles.orderBarContainer}>
      <div className={styles.orderBarText}>
        <div className={styles.orderTotalPriceText}>총 주문금액</div>
        <div className={styles.orderTotalPrice}>
          {/* toLocalString으로 사용하여 1000단위 쉼표 넣기 */}
          {menus.reduce((acc, cur) => acc + cur.price, 0).toLocaleString()}원
        </div>
      </div>
      <div className={styles.orderBarButton}>
        <Button onClick={handleOrder} type="button" size="lg">
          {store?.name && `${store.name}에서 `}주문하기
        </Button>
      </div>
    </div>
  );
};

export default OrderBar;
