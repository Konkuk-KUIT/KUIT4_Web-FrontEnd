import {DetailWrapper,IMG, Details} from "./StoresDetail.styles";
import grayStar from "../../assets/grayStar.svg";
import storeList from "../../assets/storeList.svg";

const StoresDetail = ({inTopThree, restaurantName, score, scoreCount, deliveryTime1, deliveryTime2, deliveryTip}) => {
  return (
    <DetailWrapper>
        <IMG>
        <img src={storeList} />
        </IMG>
      <Details>
        {inTopThree 
        && 
        (<>
        <div className="TopThree">{inTopThree}위</div>
        <div className="inTopThreeName">{restaurantName}</div>
        </>)
        }
        {!inTopThree && <div className="name">{restaurantName}</div>}
        <div className="score">
          <img src={grayStar}/> {score} ({scoreCount})
        </div>
        <div className="delivery">
          {deliveryTime1}분 ~ {deliveryTime2}분 ∙ 배달비 {deliveryTip}원
        </div>
      </Details>
    </DetailWrapper>
  );
};
export default StoresDetail;