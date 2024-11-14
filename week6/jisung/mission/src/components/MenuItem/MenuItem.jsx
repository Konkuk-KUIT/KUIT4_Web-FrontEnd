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
import useCartStore from "../../pages/cartStore";

const MenuItem = ({ store, menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const curCartMenus = useCartStore((state) => state.menus);
  const clearCartAndAddMenu = useCartStore((state) => state.clearCartAndAddMenu);

  // 같은 가게인지 확인
  // 맞으면 메뉴 추가, 아니면 알림 띄우고 취소 혹은 장바구니 초기화

  // store/1 페이지 들어가면 setStore로 cartStore의 store가 세팅됨
  // 이 값과 

  const isSameStore = () => {
    if ((Object.keys(curCartMenus).length > 0 && Object.values(curCartMenus)[0]?.storeId === menu.storeId) || Object.keys(curCartMenus).length === 0) {
        // 장바구니에 메뉴가 담겨있음 && 추가하는 메뉴가 장바구니의 메뉴와 같은 가게의 메뉴
        // 아님 그냥 장바구니가 비어있을 때
        // => 장바구니에 메뉴 추가
        // curCartMenus배열이 형태가 { [menuId]: { ...menu, quantity }} 이런 구조이므로
        // Object.values로 접근해야 함
        handleAddMenu(menu)
    } else { // 아니면 알림 보여주기
        const userConfirmed = window.confirm(
            "같은 가게의 메뉴만 담을 수 있습니다. 주문할 가게를 변경하실 경우 이전에 담은 메뉴가 삭제됩니다."
        )

        if (userConfirmed) {
            clearCartAndAddMenu(store, menu)
        } 
    }
  }

  const handleAddMenu = () => {
    addMenu(menu);
  };

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
