import Button from "../../components/Button";
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
} from "../../components/MenuItem/MenuItem.styles"
import useCartStore from "../../pages/cartStore";

const CartItem = ({ menu }) => {
  return (
    <MenuItemContainer>
      <MenuContentWrapper>
        <MenuImageCircle />
        <MenuInfoContainer>
          <MenuNameContainer>
            <MenuName>{menu.name}</MenuName>
          </MenuNameContainer>
          <MenuIngredients>{menu.ingredients}</MenuIngredients>
          <MenuPrice>{menu.price}원</MenuPrice>
        </MenuInfoContainer>
      </MenuContentWrapper>
      <MenuButtonWrapper>
          <MenuCartButton>
            <span style={{ paddingRight: "14px" }}>
                {menu.quantity}개
            </span>
            <img
              style={{ width: "16px", height: "16px" }}
              src={chevron_right}
              alt="Back"
            />
          </MenuCartButton>
      </MenuButtonWrapper>
    </MenuItemContainer>
  );
};

export default CartItem;
