import {CartItemWrapper, ItemDescWrapper, ButtonWrapper} from "./CartItem.styles";
import right_arrow from "../../assets/right_arrow.svg";
import storeList from "../../assets/storeList.svg";
import useCartStore from "../../store/cartStore";

const CartItem = () => {
  const menus = useCartStore((state) => state.menus);
  if (!menus || menus.length === 0) return null;

  return (
    <>
      {menus.map((menu, index) => (
        <CartItemWrapper key={index}>
          <img src={storeList} alt="menu" />
          <ItemDescWrapper>
            <div className="name">{menu.name}</div>
            <div className="myOrder">{menu.ingredients}</div>
            <div className="price">{menu.price.toLocaleString()}원</div>
          </ItemDescWrapper>
          <ButtonWrapper>
            <div className="count">1개</div>
            <img src={right_arrow} alt="arrow" />
          </ButtonWrapper>
        </CartItemWrapper>
      ))}
    </>
  );
};

export default CartItem;