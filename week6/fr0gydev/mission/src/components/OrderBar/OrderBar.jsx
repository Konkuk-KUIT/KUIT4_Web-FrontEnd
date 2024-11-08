// components/OrderBar/OrderBar.jsx
import styles from "./OrderBar.module.css";

const OrderBar = ({ menus = [], store = null }) => {
  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0) || 12100;
  // 임시 가격으로 12,100원 설정, 실제로는 menus가 있을 때 계산된 값 사용

  const handleOrder = () => {
    // 주문 처리 로직
    console.log("주문하기 클릭:", store?.name || "홈");
  };

  return (
    <div className={styles.bottomBar}>
      <div>
        <span className={styles.totalPriceLabel}>총 주문금액</span>
        <div className={styles.priceValue}>{totalPrice.toLocaleString()}원</div>
      </div>
      <button className={styles.orderButton} onClick={handleOrder}>
        {store?.name ? `${store.name}에서 ` : ""}주문하기
      </button>
    </div>
  );
};

export default OrderBar;
