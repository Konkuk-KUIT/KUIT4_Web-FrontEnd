import Button from "../Button";
import { Wrapper, RightWrapper, ButtonWrapper } from "./MenuItem.styles";

const MenuItem = ({ menu }) => {
  const handleAddMenu = () => {};

  return (
    <Wrapper>
      <div></div>
      <RightWrapper>
        <h3>{menu.name}</h3>
        <span>{menu.price}</span>
        <p>{menu.ingredients}</p>
      </RightWrapper>
      <ButtonWrapper>
        <Button onClick={handleAddMenu} type="button" size="sm">
          담기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MenuItem;
