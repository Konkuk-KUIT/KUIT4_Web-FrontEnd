import {DetailWrapper, DetailImg, Details} from "./StoresDetail.styles";
import Star from "../../assets/star.svg";

const StoresDetail = ({inTopThree, restaurantName, score, scoreCount, deliveryTime1, deliveryTime2, deliveryTip}) => {
  return (
    <DetailWrapper>
      <DetailImg />
      <Details>
        {inTopThree && <div className="TopThree">{inTopThree}위</div>}
        <div className="name">{restaurantName}</div>
        <div className="score">
          <img src={Star} alt="star" /> {score} ({scoreCount})
        </div>
        <div className="delivery">
          {deliveryTime1}분 ~ {deliveryTime2}분 ∙ 배달비 {deliveryTip}원
        </div>
      </Details>
    </DetailWrapper>
  );
};
export default StoresDetail;