import useCartStore from "../../store/useCartStore";
import Button from "../Button";
import {
  Wrapper,
  RightWrapper,
  ButtonWrapper,
  MenuImg,
} from "./MenuItem.styles";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    console.log("Button clicked!"); // 버튼 클릭 확인

    addMenu(menu);
  };

  return (
    <Wrapper>
      <MenuImg />
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
