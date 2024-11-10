import React from "react";
import styles from "./StoresItems.module.css";
import starIcon from "../../assets/Star.svg";

const StoresItems = ({ storeInfo }) => {
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
                {storeInfo.rate} ({storeInfo.reviewCnt})
            </div>
            </div>
                <div className={styles.storeDelivery}>13분~30분 ∙ 배달비 2,000원</div>
            </div>
        </div>
    );
};

export default StoresItems;