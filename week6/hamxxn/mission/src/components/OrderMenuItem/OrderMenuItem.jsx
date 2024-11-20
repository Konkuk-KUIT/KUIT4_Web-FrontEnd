import {
  MenuWrapper,
  MenuImg,
  MenuDescWrapper,
  OrderBtn,
} from "./OrderMenuItem.styles";
import Right from "../../assets/right-chevron.svg";
const OrderMenuItem = ({ menu }) => {
  return (
    <MenuWrapper>
      <MenuImg />
      <MenuDescWrapper>
        <h3 className="menu-name">
          <p>{menu.name}</p>
        </h3>
        <p>{menu.ingredients}</p>
        <span>{menu.price}원</span>
      </MenuDescWrapper>
      <OrderBtn>
        <p>1개</p>
        <img src={Right} alt="right icon" />
      </OrderBtn>
    </MenuWrapper>
  );
};

export default OrderMenuItem;
