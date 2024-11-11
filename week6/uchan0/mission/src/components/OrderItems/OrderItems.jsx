import React from "react";
import styles from "./OrderItems.module.css";
import arrowRightIcon from "../../assets/arrow/arrowRightIcon.png";
import store from "../../models/stores";

const OrderItems = () => {
  return (
    <div className={styles.menuContentContainer}>
      <div className={styles.menuInfo}>
        <div className={styles.menuImg}></div>
        <div className={styles.menuContent}>
          <div className={styles.menuName}>{store[0].menus[0].name}</div>
          <div className={styles.menuSelect}>
            {store[0].menus[0].ingredients}
          </div>
          <div className={styles.menuPrice}>
            {(store[0].menus[0].price + 3000).toLocaleString()}원
          </div>
        </div>
      </div>

      <div className={styles.menuProcess}>
        <div className={styles.menuCnt}>1개</div>
        <img src={arrowRightIcon} alt="다음" />
      </div>
    </div>
  );
};

export default OrderItems;
