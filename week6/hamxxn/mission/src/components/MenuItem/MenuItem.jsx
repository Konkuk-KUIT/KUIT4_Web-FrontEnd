import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { MenuWrapper, MenuImg, MenuDescWrapper } from "./MenuItem.styles";
import useCartStores from "../../pages/Store/cartStore";

const MenuItem = ({ store, menu }) => {
  const navigate = useNavigate();
  const statestore = useCartStores((state) => state.store);
  const addMenu = useCartStores((state) => state.addMenu);
  const setStore = useCartStores((state) => state.setStore);
  const clearCart = useCartStores((state) => state.clearCart);
  const handleAddMenu = () => {
    if (store && statestore.id != store.id) {
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
      <Button
        onClick={handleAddMenu}
        type="button"
        size="sm"
        width="52px"
        height="32px"
      >
        담기
      </Button>
    </MenuWrapper>
  );
};

export default MenuItem;
