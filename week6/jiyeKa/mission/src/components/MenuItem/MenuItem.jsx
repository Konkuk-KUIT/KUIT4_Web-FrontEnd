import Button from "../Button";
import {MenuItemContainer} from './MenuItem.styles'
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
      // 가게가 같거나 장바구니가 비어있는 경우, 메뉴 추가
      addMenu(menu);
    }
  };


  return (
    <div>
      <MenuItemContainer>
      <img src={roundIMG} />
      </MenuItemContainer>
      <h3>{menu.name}</h3>
      <span>{menu.price}원</span>
      <p>{menu.ingredients}</p>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
