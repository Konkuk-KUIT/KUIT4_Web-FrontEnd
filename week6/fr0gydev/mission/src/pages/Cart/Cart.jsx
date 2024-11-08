import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import TopBar from "../../components/TopBar/TopBar";

const Cart = () => {
  const navigate = useNavigate();

  // 임시 데이터
  const cartData = {
    storeName: "샐러리 한남점",
    item: {
      name: "토마토 샐러드",
      options: "추천소스, 채소볼, 베이컨추가, 시저드레싱 추가",
      quantity: 1,
      price: 10600,
    },
    deliveryFee: 2000,
    minOrderPrice: 13000,
  };

  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.header}>
        <h1 className={styles.storeName}>{cartData.storeName}</h1>
        <span className={styles.minOrderAlert}>최소금액 미달</span>
      </div>

      <div className={styles.cartItem}>
        <div className={styles.imageContainer} />
        <div className={styles.itemInfo}>
          <div className={styles.itemHeader}>
            <h2 className={styles.itemName}>{cartData.item.name}</h2>
            <span className={styles.quantity}>{cartData.item.quantity}개</span>
            <span className={styles.rightArrow}>＞</span>
          </div>
          <p className={styles.itemOptions}>{cartData.item.options}</p>
          <p className={styles.itemPrice}>
            {cartData.item.price.toLocaleString()}원
          </p>
        </div>
      </div>

      <button className={styles.addMoreButton}>더 담기 ＋</button>

      <div className={styles.priceInfo}>
        <div className={styles.priceRow}>
          <span>주문금액</span>
          <span>{cartData.item.price.toLocaleString()}원</span>
        </div>
        <div className={styles.priceRow}>
          <span>배달요금</span>
          <span>{cartData.deliveryFee.toLocaleString()}원</span>
        </div>
        <div className={styles.priceRow}>
          <span>총 결제금액</span>
          <span>
            {(cartData.item.price + cartData.deliveryFee).toLocaleString()}원
          </span>
        </div>
      </div>

      <div className={styles.minOrderPrice}>
        최소 주문금액 {cartData.minOrderPrice.toLocaleString()}원
      </div>

      <button className={styles.orderButton}>
        {(cartData.item.price + cartData.deliveryFee).toLocaleString()}원
        결제하기
      </button>
    </div>
  );
};

export default Cart;
