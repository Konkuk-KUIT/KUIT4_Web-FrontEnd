import styles from "./OrderBar.module.css";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../stores/useCartStore";

const OrderBar = ({ store }) => {
  const navigate = useNavigate();
  const { menus } = useCartStore();
  const cartStore = useCartStore((state) => state.store);
  const currentStore = store || cartStore;

  const totalPrice = menus.reduce(
    (acc, cur) => acc + cur.price * (cur.quantity || 1),
    0
  );

  const handleOrder = () => {
    if (totalPrice > 0) {
      navigate("/cart");
    }
  };

  return (
    <div className={styles.bottomBar}>
      <div>
        <span className={styles.totalPriceLabel}>총 주문금액</span>
        <div className={styles.priceValue}>{totalPrice.toLocaleString()}원</div>
      </div>
      <button
        className={`${styles.orderButton} ${
          totalPrice === 0 ? styles.disabled : ""
        }`}
        onClick={handleOrder}
        disabled={totalPrice === 0}
      >
        {totalPrice === 0
          ? "메뉴를 담아주세요"
          : `${currentStore?.name ? `${currentStore.name}에서 ` : ""}주문하기`}
      </button>
    </div>
  );
};

export default OrderBar;
