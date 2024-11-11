import React from "react";
import styles from "./Stores.module.css";
import OrderBar from "../../components/OrderBar/OrderBar";
import arrowBack from "../../assets/arrow/arrowBackIcon.png";
import StoreItems from "../../components/StoreItems/StoreItems";
import stores from "../../models/stores";
import { Link } from "react-router-dom";

const Stores = () => {
  return (
    <div>
      <Link to="/" className={styles.homeLink}>
        <div className={styles.headerArrow}>
          <img src={arrowBack} alt="Home으로 가기 버튼" />
        </div>
      </Link>
      <div className={styles.storesContent}>
        <div className={styles.categoryName}>샐러드</div>
        <div className={styles.storeInfo}>
          {stores.map((storeInfo) => (
            <Link
              to={`/store/${storeInfo.id}`}
              key={storeInfo.id}
              style={{ textDecoration: "none" }}
            >
              <StoreItems storeInfo={storeInfo} />
            </Link>
          ))}
        </div>
      </div>

      <OrderBar />
    </div>
  );
};

export default Stores;

// 더미 데이터
// const stores = [
//   {
//     id: 1,
//     rank: 1,
//     name: "샐로리 한남점",
//     rank: 4.9,
//     reviewCnt: 3919,
//   },
//   {
//     id: 2,
//     rank: 2,
//     name: "옐로우푸드 샐러드",
//     rank: 4.8,
//     reviewCnt: 1129,
//   },
//   {
//     id: 3,
//     rank: 3,
//     name: "씬더볼드 한남점",
//     rank: 4.8,
//     reviewCnt: 919,
//   },
//   {
//     id: 4,
//     rank: 4,
//     name: "THE 샐러드가득담은",
//     rank: 5.0,
//     reviewCnt: 27,
//   },
//   {
//     id: 5,
//     rank: 5,
//     name: "파스토보이",
//     rank: 4.8,
//     reviewCnt: 801,
//   },
//   {
//     id: 6,
//     rank: 6,
//     name: "힘난다 샐러드",
//     rank: 4.1,
//     reviewCnt: 24,
//   },
//   {
//     id: 7,
//     rank: 7,
//     name: "우왕",
//     rank: 4.1,
//     reviewCnt: 24,
//   },
//   {
//     id: 8,
//     rank: 8,
//     name: "대박",
//     rank: 4.1,
//     reviewCnt: 24,
//   },
//   {
//     id: 9,
//     rank: 9,
//     name: "신기",
//     rank: 4.1,
//     reviewCnt: 24,
//   },
// ];
