import Button from "../Button"
import {MenuItemWrapper, ItemDescWrapper, NameWrapper, ButtonWrapper} from './MenuItem.styles';

const MenuItem = ({menu}) => {
  const handleAddMenu = () => {
    alert("dd");
  };

  return (
    <MenuItemWrapper>
      <img src="https://placehold.co/54x54" alt={menu.name} />
      <ItemDescWrapper>
        <NameWrapper>
          <h3>{menu.name}</h3>
          <h4>{menu.isBest ? "BEST" : ""}</h4>
        </NameWrapper>
        <span>{menu.price}원</span>
        <p>{menu.ingredients}</p>
      </ItemDescWrapper>
      <ButtonWrapper>
        <Button onClick={handleAddMenu} type="button" size="sm">담기</Button>
      </ButtonWrapper>
    </MenuItemWrapper>
  );
};
export default MenuItem;
