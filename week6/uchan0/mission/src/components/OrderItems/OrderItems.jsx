import React from "react";
import styles from "./OrderItems.module.css";
import arrowRightIcon from "../../assets/arrow/arrowRightIcon.png";
import store from "../../models/stores";

const OrderItems = ({ menu }) => {
  return (
    <div className={styles.menuContentContainer}>
      <div className={styles.menuInfo}>
        <div className={styles.menuImg}></div>
        <div className={styles.menuContent}>
          <div className={styles.menuName}>{menu.name}</div>
          <div className={styles.menuSelect}>{menu.ingredients}</div>
          <div className={styles.menuPrice}>
            {menu.price.toLocaleString()}원
          </div>
        </div>
      </div>

      <div className={styles.menuProcess}>
        <div className={styles.menuCnt}>{menu.cnt}개</div>
        <img src={arrowRightIcon} alt="다음" />
      </div>
    </div>
  );
};

export default OrderItems;
