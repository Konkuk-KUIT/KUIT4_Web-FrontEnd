import {CartItemWrapper, ItemDescWrapper, ButtonWrapper} from "./CartItem.styles";
import Arrow from "../../assets/arrow-prev.svg";
import useCartStore from "../../store/cartStore";

const CartItem = () => {
  const menus = useCartStore((state) => state.menus);
  const reducedMenus = menus.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) { return acc.concat([current]); } 
    else { return acc; }
  }, []);

  return (
    <>
      {reducedMenus.map((menu) => {
        const itemCount = menus.filter((m) => m.id === menu.id).length;
        
        return (
          <CartItemWrapper key={menu.id}>
            <img src="https://placehold.co/54x54" alt="메뉴 이미지" />
            <ItemDescWrapper>
              <div className="itemName">{menu.name}</div>
              <div className="itemIngredients">{menu.ingredients} 추가</div>
              <div className="itemPrice">{menu.price.toLocaleString('ko-KR')}원</div>
            </ItemDescWrapper>
            <ButtonWrapper>
              <div className="itemNum">{itemCount}개</div>
              <img src={Arrow} alt="right chevron" />
            </ButtonWrapper>
          </CartItemWrapper>
        );
      })}
    </>
  );
};
export default CartItem;