import {
  Wrapper,
  RightWrapper,
  ButtonWrapper,
  MenuImg,
} from "./CartItem.styles";
import ArrowRight from "../../assets/arrow-right.svg";

const MenuItem = () => {
  const handleAddMenu = () => {};

  return (
    <Wrapper>
      <MenuImg></MenuImg>
      <RightWrapper>
        <h3>토마토 샐러드</h3>
        <p>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</p>
        <span>10,600원</span>
      </RightWrapper>
      <ButtonWrapper>
        <span>1개</span>
        <img src={ArrowRight} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MenuItem;
