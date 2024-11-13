import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { MenuWrapper, MenuImg, MenuDescWrapper } from "./MenuItem.styles";
import useCartStores from "../../pages/Store/cartStore";
import { GetStoreContext } from "../../pages/context";

const MenuItem = ({ menu }) => {
  //이 메뉴의 store
  const store = GetStoreContext().store;
  const navigate = useNavigate();
  //장바구니에 담겨 있는 store
  const currentStore = useCartStores((state) => state.store);
  const addMenu = useCartStores((state) => state.addMenu);
  const setStore = useCartStores((state) => state.setStore);
  const clearCart = useCartStores((state) => state.clearCart);
  const handleAddMenu = () => {
    if (store && currentStore.id != store.id) {
      const confirmReset = window.confirm(
        "다른 가게의 메뉴를 추가하려고 합니다. 장바구니를 초기화하시겠습니까?"
      );

      if (!confirmReset) {
        return;
      }
      clearCart();
      setStore(store);
    }

    addMenu(menu);
    navigate(`/cart`);
  };

  return (
    <MenuWrapper>
      <MenuImg />
      <MenuDescWrapper>
        <h3 className="menu-name">
          <p>{menu.name}</p>
          <p className="isBest">{menu.isBest && "Best"}</p>
        </h3>
        <span>{menu.price}원</span>
        <p>{menu.ingredients}</p>
      </MenuDescWrapper>
      <Button onClick={handleAddMenu} size="sm">
        담기
      </Button>
    </MenuWrapper>
  );
};

export default MenuItem;
