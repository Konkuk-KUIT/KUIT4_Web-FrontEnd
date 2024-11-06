import { Link, useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import stores from "../../models/stores";
import Button from "../../components/Button";
import styles from "./Store.module.css";
import arrowBackIcon from "../../assets/arrow/arrowBackIcon.png";
import yellowStarIcon from "../../assets/YellowStar.png";

//onClickButton을 버튼에 적용시키고 싶은데 어떻게 하는지 모르겠음..
const onClickButton = () => {
  return <Link to="/">Home으로</Link>;
};

const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((store) => store.id.toString() === storeId);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <Link to="/" className={styles.homeLink}>
        <div className={styles.headerArrow}>
          <img src={arrowBackIcon} alt="Home으로 가기 버튼" />
        </div>
      </Link>
      {/* 버튼과 onClickButton을 이용하고 싶음 */}
      {/* <button style={{ all: "unset" }}>
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
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
