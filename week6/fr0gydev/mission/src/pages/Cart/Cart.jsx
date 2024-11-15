import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import TopBar from "../../components/TopBar/TopBar";
import useCartStore from "../../stores/useCartStore";

const Cart = () => {
  const navigate = useNavigate();
  const { store, menus, addMenu, removeMenu, decreaseQuantity } =
    useCartStore();

  // 총 금액 계산
  const totalAmount = menus.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  if (!store || menus.length === 0) {
    return (
      <div className={styles.container}>
        <TopBar />
        <div className={styles.emptyCart}>
          <p>장바구니가 비어있습니다</p>
          <button className={styles.addMoreButton} onClick={() => navigate(-1)}>
            메뉴 담기
          </button>
        </div>
      </div>
    );
  }

  const deliveryFee = store.deliveryFee || 2000;
  const minOrderPrice = store.minDeliveryPrice;
  const isMinOrderSatisfied = totalAmount >= minOrderPrice;

  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.header}>
        <h1 className={styles.storeName}>{store.name}</h1>
        {!isMinOrderSatisfied && (
          <span className={styles.minOrderAlert}>최소금액 미달</span>
        )}
      </div>

      {menus.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <div className={styles.imageContainer} />
          <div className={styles.itemInfo}>
            <div className={styles.itemHeader}>
              <h2 className={styles.itemName}>{item.name}</h2>
              <div className={styles.quantityControls}>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className={styles.quantityButton}
                >
                  -
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  onClick={() => addMenu(item)}
                  className={styles.quantityButton}
                >
                  +
                </button>
                <button
                  onClick={() => removeMenu(item.id)}
                  className={styles.removeButton}
                >
                  ×
                </button>
              </div>
            </div>
            {item.options && (
              <p className={styles.itemOptions}>{item.options}</p>
            )}
            <p className={styles.itemPrice}>
              {(item.price * item.quantity).toLocaleString()}원
            </p>
          </div>
        </div>
      ))}

      <button
        className={styles.addMoreButton}
        onClick={() => navigate(`/stores/${store.id}`)}
      >
        더 담기 +
      </button>

      <div className={styles.priceInfo}>
        <div className={styles.priceRow}>
          <span>주문금액</span>
          <span>{totalAmount.toLocaleString()}원</span>
        </div>
        <div className={styles.priceRow}>
          <span>배달요금</span>
          <span>{deliveryFee.toLocaleString()}원</span>
        </div>
        <div className={styles.priceRow}>
          <span>총 결제금액</span>
          <span className={styles.totalPrice}>
            {(totalAmount + deliveryFee).toLocaleString()}원
          </span>
        </div>
      </div>

      <div className={styles.minOrderPrice}>
        최소 주문금액 {minOrderPrice.toLocaleString()}원
      </div>

      <button
        className={`${styles.orderButton} ${
          !isMinOrderSatisfied ? styles.disabled : ""
        }`}
        disabled={!isMinOrderSatisfied}
      >
        {(totalAmount + deliveryFee).toLocaleString()}원 결제하기
      </button>
    </div>
  );
};

export default Cart;
