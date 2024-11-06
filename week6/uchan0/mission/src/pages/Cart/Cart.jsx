import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import OrderBar from "../../components/OrderBar/OrderBar";
import arrowBackIcon from "../../assets/arrow/arrowBackIcon.png";
import arrowRightIcon from "../../assets/arrow/arrowRightIcon.png";
import cautionIcon from "../../assets/Caution.png";
import plusIcon from "../../assets/PlusIcon.png";
import Button from "../../components/Button";

const Cart = () => {
  return (
    <div>
      <div className={styles.header}>
        <Link to="/" className={styles.homeLink}>
          <div className={styles.headerArrow}>
            <img src={arrowBackIcon} alt="Home으로 가기 버튼" />
          </div>
        </Link>
        <div className={styles.orderCancel}>주문취소</div>
      </div>
      <div className={styles.borderLine}></div>
      <div className={styles.orderContentContainer}>
        <div className={styles.storeContent}>
          <div className={styles.storeName}>샐로리 한남점</div>
          <div className={styles.leastPriceContainer}>
            <div className={styles.leastPrice}>최소금액 미달</div>
            <img src={cautionIcon} alt="최소금액 미달" />
          </div>
        </div>
        <div className={styles.menuContentContainer}>
          <div className={styles.menuInfo}>
            <div className={styles.menuImg}></div>
            <div className={styles.menuContent}>
              <div className={styles.menuName}>토마토 샐러드</div>
              <div className={styles.menuSelect}>
                추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
              </div>
              <div className={styles.menuPrice}>10,600원</div>
            </div>
          </div>

          <div className={styles.menuProcess}>
            <div className={styles.menuCnt}>1개</div>
            <img src={arrowRightIcon} alt="다음" />
          </div>
        </div>
      </div>
      <div className={styles.moreBox}>
        <div className={styles.moreText}>더 담기</div>
        <img src={plusIcon} alt="더 담기" />
      </div>
      <div className={styles.borderLine}></div>
      <div className={styles.orderResultContainer}>
        <div className={styles.orderPriceContainer}>
          <div className={styles.priceText}>주문금액</div>
          <div className={styles.price}>10,600원</div>
        </div>
        <div className={styles.orderPriceContainer}>
          <div className={styles.priceText}>배달요금</div>
          <div className={styles.price}>2,000원</div>
        </div>
        <div className={styles.totalPriceContainer}>
          <div className={styles.totalPriceText}>총 결제금액</div>
          <div className={styles.totalPrice}>12,600원</div>
        </div>
      </div>
      <div className={styles.finalOrderContainer}>
        <div className={styles.finalLeastPrice}>최소 주문금액 13,000원</div>
        <Button type="button" size="xl" disabled={true}>
          12,600원 결제하기
        </Button>
      </div>
    </div>
  );
};

export default Cart;
