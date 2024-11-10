import RatingStar from "../../assets/rating-star.svg";
import { Wrapper, LeftWrapper, RightWrapper, Store } from "./StoreItem.styles";

const StoreItem = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <div></div>
      </LeftWrapper>
      <RightWrapper>
        <Store>
          <span className="store-name">1위</span>
          <span className="store-name">샐로리 한남점</span>
        </Store>
        <Store>
          <div>
            <img src={RatingStar} />
            <span className="store-name__description">4.9 (3,919)</span>
          </div>
          <span className="store-name__description">
            13분~30분 ∙ 배달비 2,000원
          </span>
        </Store>
      </RightWrapper>
    </Wrapper>
  );
};

export default StoreItem;
