import React from "react";
import styles from "./StoreItems.module.css";
import starIcon from "../../assets/Star.png";

const StoreItems = ({ storeInfo }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.storeImg}></div>
      <div className={styles.storeInfoContainer}>
        {storeInfo.id <= 3 && (
          <div className={styles.storeRank}>{storeInfo.id}위</div>
        )}

        <div className={styles.storeName}>{storeInfo.name}</div>
        <div className={styles.scoreContainer}>
          <img src={starIcon} alt="리뷰" />
          <div className={styles.storeScore}>
            {storeInfo.rate} ({storeInfo.reviewCnt.toLocaleString()})
          </div>
        </div>
        <div className={styles.storeDelivery}>
          {storeInfo.minDeliveryTime}~{storeInfo.maxDeliveryTime}분 ∙ 배달비{" "}
          {storeInfo.deliveryFee.toLocaleString()}원
        </div>
      </div>
    </div>
  );
};

export default StoreItems;
