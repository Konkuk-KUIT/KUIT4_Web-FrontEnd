import React from "react";
import styles from "./Stores.module.css";
import OrderBar from "../../components/OrderBar/OrderBar";
import arrowBack from "../../assets/arrow/arrowBackIcon.png";
import StoreItems from "../../components/StoreItems/StoreItems";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStores } from "../../apis/stores";

const Stores = () => {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate("/");
  };

  const [stores, setStores] = useState([]);
  useEffect(() => {
    getStores().then((value) => {
      setStores(value);
    });
  }, []);

  return (
    <div>
      {/* useNavigage사용으로 변경 */}
      <div
        className={styles.homeLink}
        onClick={() => onClickButton()}
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <div className={styles.headerArrow}>
          <img src={arrowBack} alt="Home으로 가기 버튼" />
        </div>
      </div>
      {/* <Link to="/" className={styles.homeLink}>
        <div className={styles.headerArrow}>
          <img src={arrowBack} alt="Home으로 가기 버튼" />
        </div>
      </Link> */}
      <div className={styles.storesContent}>
        <div className={styles.categoryName}>샐러드</div>
        <div className={styles.storeInfo}>
          {stores.length > 0 ? (
            stores.map((storeInfo) => (
              <Link
                to={`/store/${storeInfo.id}`}
                key={storeInfo.id}
                style={{ textDecoration: "none" }}
              >
                <StoreItems storeInfo={storeInfo} />
              </Link>
            ))
          ) : (
            <div>Loading stores...</div>
          )}
        </div>
      </div>

      <OrderBar />
    </div>
  );
};

export default Stores;
