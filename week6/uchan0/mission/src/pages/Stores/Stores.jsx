import React from "react";
import styles from "./Stores.module.css";
import OrderBar from "../../components/OrderBar/OrderBar";
import arrowBack from "../../assets/arrow/arrowBackIcon.png";
import StoreItems from "../../components/StoreItems/StoreItems";

const stores = [
  {
    id: 1,
    rank: 1,
    name: "샐로리 한남점",
    score: 4.9,
    reviewCount: 3919,
  },
  {
    id: 2,
    rank: 2,
    name: "옐로우푸드 샐러드",
    score: 4.8,
    reviewCount: 1129,
  },
  {
    id: 3,
    rank: 3,
    name: "씬더볼드 한남점",
    score: 4.8,
    reviewCount: 919,
  },
  {
    id: 4,
    rank: 4,
    name: "THE 샐러드가득담은",
    score: 5.0,
    reviewCount: 27,
  },
  {
    id: 5,
    rank: 5,
    name: "파스토보이",
    score: 4.8,
    reviewCount: 801,
  },
  {
    id: 6,
    rank: 6,
    name: "힘난다 샐러드",
    score: 4.1,
    reviewCount: 24,
  },
  {
    id: 7,
    rank: 7,
    name: "우왕",
    score: 4.1,
    reviewCount: 24,
  },
  {
    id: 8,
    rank: 8,
    name: "대박",
    score: 4.1,
    reviewCount: 24,
  },
  {
    id: 9,
    rank: 9,
    name: "신기",
    score: 4.1,
    reviewCount: 24,
  },
];

const Stores = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <img src={arrowBack} alt="뒤로가기" />
      </div>
      <div className={styles.storesContent}>
        <div className={styles.categoryName}>샐러드</div>
        <div className={styles.storeInfo}>
          {stores.map((storeInfo) => (
            <StoreItems key={storeInfo.id} storeInfo={storeInfo} />
          ))}
        </div>
      </div>

      <OrderBar />
    </div>
  );
};

export default Stores;
