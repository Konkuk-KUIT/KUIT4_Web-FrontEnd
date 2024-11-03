import { StoreWrapper, StoreDescWrapper, StoreImg } from "./StoreDetail.styles";
import Star from "../../assets/star.svg";
const StoreDetail = ({
  name,
  rating,
  reviewCount,
  deliveryTimeMin,
  deliveryTimeMax,
  deliveryFee,
  rank,
}) => {
  return (
    <StoreWrapper>
      <StoreImg />
      <StoreDescWrapper>
        {rank && <div className="bold">{rank}위</div>}
        <div className="bold">{name}</div>
        <div style={{ display: "flex" }}>
          <img src={Star} />
          <p>
            {rating} ({reviewCount})
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p>
            {deliveryTimeMin}분 ~ {deliveryTimeMax}분
          </p>
          <p> ∙ </p>
          <p>배달비 {deliveryFee}원</p>
        </div>
      </StoreDescWrapper>
    </StoreWrapper>
  );
};

export default StoreDetail;
