import { useNavigate, useParams } from "react-router-dom";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import stores from "../../models/stores";
import styles from "./Store.module.css";
import arrowBackIcon from "../../assets/arrow/arrowBackIcon.png";
import yellowStarIcon from "../../assets/YellowStar.png";
import { useEffect, useState } from "react";
import { getStore } from "../../apis/stores";

const Store = () => {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate("/store");
  };

  const { storeId } = useParams();
  const [store, setStore] = useState();
  useEffect(() => {
    getStore(storeId).then((value) => setStore(value));
  }, []);

  // const store = stores.find((store) => store.id.toString() === storeId);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      {/* useNavigate 사용으로 바꿈 */}
      <div
        className={styles.homeLink}
        onClick={() => onClickButton()}
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <div className={styles.headerArrow}>
          <img src={arrowBackIcon} alt="Home으로 가기 버튼" />
        </div>
      </div>
      {/* <Link to="/store" className={styles.homeLink}>
        <div className={styles.headerArrow}>
          <img src={arrowBackIcon} alt="Home으로 가기 버튼" />
        </div>
      </Link> */}
      {/* 버튼과 onClickButton을 이용하고 싶음 */}
      {/* <button style={{ all: "unset" }} onClick={onClickButton}>
        <div className={styles.headerArrow}>
          <img src={arrowBackIcon} alt="Home으로 가기 버튼" />
        </div>
      </button> */}
      <div className={styles.storeInfoContainer}>
        <div className={styles.storeName}>{store.name}</div>
        <div className={styles.storeReviewContainer}>
          <img src={yellowStarIcon} alt="리뷰 별표" />
          <div className={styles.storeRate}>{store.rate}</div>
          <div className={styles.storeReviewCnt}>
            리뷰{store.reviewCnt.toLocaleString()}
          </div>
        </div>
        <div className={styles.paymentContainer}>
          <div className={styles.paymentInfo}>결제방법</div>
          <div className={styles.paymentInfoContent}>
            토스결제만 현장결제 안됨
          </div>
        </div>
        <div className={styles.paymentContainer}>
          <div className={styles.paymentInfo}>최소주문</div>
          <div className={styles.paymentInfoContent}>
            {store.minDeliveryPrice.toLocaleString()}원
          </div>
        </div>
        <div className={styles.paymentContainer}>
          <div className={styles.paymentInfo}>배달시간</div>
          <div className={styles.paymentInfoContent}>
            약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
          </div>
        </div>
      </div>
      <div className={styles.borderLine}></div>
      <div className={styles.menuInfoContainer}>
        <div className={styles.menuCategory}>샐러드</div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} newStore={store} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
