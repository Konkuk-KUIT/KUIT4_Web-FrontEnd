import Button from "../Button";
import chevron_right from "../../assets/Image/chevron-right.png";

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
  MenuCartButton,
} from "./MenuItem.styles";

const MenuItem = ({ menu, displayMode }) => {
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
        {displayMode === "cart" ? (
          <MenuCartButton>
            <span style={{ paddingRight: "14px" }}>1개</span>
            <img
              style={{ width: "16px", height: "16px" }}
              src={chevron_right}
              alt="Back"
            />
          </MenuCartButton>
        ) : (
          <Button onClick={handleAddMenu} type="button" size="sm">
            담기
          </Button>
        )}
      </MenuButtonWrapper>
    </MenuItemContainer>
  );
};

export default MenuItem;
