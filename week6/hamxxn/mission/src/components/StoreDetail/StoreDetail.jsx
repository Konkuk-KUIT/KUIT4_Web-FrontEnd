import { StoreWrapper, StoreDescWrapper, StoreImg } from "./StoreDetail.styles";
import Star from "../../assets/star.svg";
import { useNavigate } from "react-router-dom";
const StoreDetail = ({
  name,
  rating,
  reviewCount,
  deliveryTimeMin,
  deliveryTimeMax,
  deliveryFee,
  rank,
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/store/" + 1);
  };

  return (
    <StoreWrapper onClick={handleClick}>
      <StoreImg />
      <StoreDescWrapper>
        {rank && <div className="bold">{rank}위</div>}
        <div className="bold">{name}</div>
        <div style={{ display: "flex" }}>
          <img src={Star} style={{ marginRight: "3px" }} />
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
