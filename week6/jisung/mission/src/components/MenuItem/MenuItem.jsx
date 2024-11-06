import Button from "../Button";

import {
  MenuItemContainer,
  MenuImageCircle,
  MenuInfoContainer,
  MenuNameContainer,
  BestMenu,
  MenuName,
  MenuPrice,
  MenuIngredients,
  MenuContentWrapper,
  MenuButtonWrapper,
} from "./MenuItem.styles";

const MenuItem = ({ menu }) => {
  const handleAddMenu = () => {};

  return (
    <MenuItemContainer>
      <MenuContentWrapper>
        <MenuImageCircle />
        <MenuInfoContainer>
          <MenuNameContainer>
            <MenuName>{menu.name}</MenuName>
            {menu.isBest ? <BestMenu>BEST</BestMenu> : null}
          </MenuNameContainer>
          <MenuPrice>{menu.price}원</MenuPrice>
          <MenuIngredients>{menu.ingredients}</MenuIngredients>
        </MenuInfoContainer>
      </MenuContentWrapper>
      <MenuButtonWrapper>
        <Button onClick={handleAddMenu} type="button" size="sm">
          담기
        </Button>
      </MenuButtonWrapper>
    </MenuItemContainer>
  );
};

export default MenuItem;
