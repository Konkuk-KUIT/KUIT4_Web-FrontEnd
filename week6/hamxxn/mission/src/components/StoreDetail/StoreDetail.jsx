import { StoreWrapper, StoreDescWrapper, StoreImg } from "./StoreDetail.styles";
import Star from "../../assets/star.svg";
import { useNavigate } from "react-router-dom";

const StoreDetail = ({ store }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store/" + store.id);
  };

  return (
    <StoreWrapper onClick={handleClick}>
      <StoreImg />
      <StoreDescWrapper>
        {store.rank && <div className="bold">{store.rank}위</div>}
        <div className="bold">{store.name}</div>
        <div style={{ display: "flex" }}>
          <img src={Star} style={{ marginRight: "3px" }} />
          <p>
            {store.rate} ({store.reviewCnt})
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p>
            {store.minDeliveryTime}분 ~ {store.maxDeliveryTime}분
          </p>
          <p> ∙ </p>
          <p>배달비 {store.deliveryFee}원</p>
        </div>
      </StoreDescWrapper>
    </StoreWrapper>
  );
};

export default StoreDetail;
