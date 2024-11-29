import Button from "../Button";
import {BestMenu, MenuItemContainer, MenuName, MenuPrice, MenuIngredients, MenuButtonWrapper, MenuNameContainer
  , MenuInfoContainer
} from './MenuItem.styles'
import roundIMG from "../../assets/roundIMG.svg"
import useCartStore from "../../store/cartStore.js"

const MenuItem = ({ menu }) => {

  const menus = useCartStore((state) => state.menus);
  const addMenu = useCartStore((state) => state.addMenu);
  const resetCart = useCartStore((state)=>state.resetCart)
  const currentStore = useCartStore((state) => state.store);

  const handleAddMenu = () => {
    if (menus.length > 0 && (menus[0].storeID !== menu.storeID)) {
      const alert = window.confirm("주문서에는 같은 가게만 담을 수 있어요. 새로 담고 이전에 담은 메뉴는 삭제할까요?");
      if (alert) {
        resetCart();
        addMenu(menu);
      }
    } else {
      addMenu(menu);
    }
  };


  return (
    <div>
      <MenuItemContainer /*메뉴 단위 , row */>   
      <img src={roundIMG} />
      <MenuInfoContainer /* 메뉴 이름 ~ 가격 ~ 재료 까지 column단위 컴포넌트 */>  
        <MenuNameContainer /* 메뉴 이름 + BEST 메뉴 여부 */>  
          <MenuName>{menu.name}</MenuName>
          {menu.isBest && <BestMenu>BEST</BestMenu>}
        </MenuNameContainer>
        <MenuPrice>{menu.price}원</MenuPrice>
        <MenuIngredients>{menu.ingredients}</MenuIngredients>
      </MenuInfoContainer>
      <MenuButtonWrapper /* 버튼 컴포넌트 */> 
      <Button onClick={handleAddMenu} type="button" size="sm">담기</Button>
      </MenuButtonWrapper>
      </MenuItemContainer>
    </div>  
  );
};

export default MenuItem;
