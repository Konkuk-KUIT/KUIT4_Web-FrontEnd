import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import arrowBackIcon from "../../assets/arrow/arrowBackIcon.png";
import cautionIcon from "../../assets/Caution.png";
import plusIcon from "../../assets/PlusIcon.png";
import Button from "../../components/Button";
import store from "../../models/stores";
import OrderItems from "../../components/OrderItems/OrderItems";
import useCartStore from "../../store/cartStore";

const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const reset = useCartStore((state) => state.resetAll);

  const navigate = useNavigate();
  const onClickButton = () => {
    navigate("/");
  };
  const onClickMoreButton = () => {
    // 담은 음식에 해당하는 storeId로 이동하게 구현
    navigate(`/store/${store.id}`);
  };

  const resetOrder = () => {
    if (
      window.confirm(
        "주문 취소를 하시면 장바구니가 초기화됩니다. 주문최소하시겠습니까?"
      )
    ) {
      reset(); // 확인을 누른 경우 reset 실행
    }
  };

  // 아직 아무것도 안 담았을 때 early return
  if (!store) {
    return (
      <div>
        <div
          className={styles.homeLink}
          onClick={() => onClickButton()}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <div className={styles.headerArrow}>
            <img src={arrowBackIcon} alt="Home으로 가기 버튼" />
            담으러 가기
          </div>
        </div>
        아직 아무것도 담지 않았어요
      </div>
    );
  }

  return (
    <div>
      <div className={styles.header}>
        {/* useNavigage사용으로 변경 */}
        <div
          className={styles.homeLink}
          onClick={() => onClickButton()}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <div className={styles.headerArrow}>
            <img src={arrowBackIcon} alt="Home으로 가기 버튼" />
          </div>
        </div>
        {/* <Link to="/" className={styles.homeLink}>
          <div className={styles.headerArrow}>
            <img src={arrowBackIcon} alt="Home으로 가기 버튼" />
          </div>
        </Link> */}
        <div onClick={resetOrder} className={styles.orderCancel}>
          주문취소
        </div>
      </div>
      <div className={styles.borderLine}></div>
      <div className={styles.orderContentContainer}>
        <div className={styles.storeContent}>
          <div className={styles.storeName}>{store.name}</div>

          {/* 최소 주문 금액보다 작을 때만 보이게하기 */}
          <div className={styles.leastPriceContainer}>
            {menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0) <
              store.minDeliveryPrice && (
              <>
                <div className={styles.leastPrice}>최소금액 미달</div>
                <img src={cautionIcon} alt="최소금액 미달" />
              </>
            )}
          </div>
        </div>
        {menus.map((menu) => (
          <OrderItems menu={menu} key={menu.id} />
        ))}
      </div>
      <div
        className={styles.moreBox}
        onClick={onClickMoreButton}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.moreText}>더 담기</div>
        <img src={plusIcon} alt="더 담기" />
      </div>
      <div className={styles.borderLine}></div>
      <div className={styles.orderResultContainer}>
        <div className={styles.orderPriceContainer}>
          <div className={styles.priceText}>주문금액</div>
          <div className={styles.price}>
            {menus
              .reduce((acc, currentMenu) => acc + currentMenu.price, 0)
              .toLocaleString()}
            원
          </div>
        </div>
        <div className={styles.orderPriceContainer}>
          <div className={styles.priceText}>배달요금</div>
          <div className={styles.price}>
            {store.deliveryFee.toLocaleString()}원
          </div>
        </div>
        <div className={styles.totalPriceContainer}>
          <div className={styles.totalPriceText}>총 결제금액</div>
          <div className={styles.totalPrice}>
            {(
              menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0) +
              store.deliveryFee
            ).toLocaleString()}
            원
          </div>
        </div>
      </div>
      <div className={styles.finalOrderContainer}>
        <div className={styles.finalLeastPrice}>
          최소 주문금액 {store.minDeliveryPrice.toLocaleString()}원
        </div>
        <Button
          type="button"
          size="xl"
          disabled={
            menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0) <
            store.minDeliveryPrice
          }
        >
          {(
            menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0) +
            store.deliveryFee
          ).toLocaleString()}
          원 결제하기
        </Button>
      </div>
    </div>
  );
};

export default Cart;
