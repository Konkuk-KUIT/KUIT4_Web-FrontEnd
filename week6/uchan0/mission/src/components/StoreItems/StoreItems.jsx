import React from "react";
import styles from "./StoreItems.module.css";
import starIcon from "../../assets/Star.png";

const StoreItems = ({ storeInfo }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.storeImg}></div>
      <div className={styles.storeInfoContainer}>
        {storeInfo.rank <= 3 && (
          <div className={styles.storeRank}>{storeInfo.rank}위</div>
        )}

        <div className={styles.storeName}>{storeInfo.name}</div>
        <div className={styles.scoreContainer}>
          <img src={starIcon} alt="리뷰" />
          <div className={styles.storeScore}>
            {storeInfo.score} ({storeInfo.reviewCount.toLocaleString()})
          </div>
        </div>
        <div className={styles.storeDelivery}>13분~30분 ∙ 배달비 2,000원</div>
      </div>
    </div>
  );
};

export default StoreItems;
