import {useParams} from "react-router-dom";
import useCartStore from "../../store/cartStore";
import stores from "../../models/stores";
import Button from "../Button"
import {MenuItemWrapper, ItemDescWrapper, NameWrapper, ButtonWrapper, ModalBackground, ModalWrapper} from './MenuItem.styles';
import {useState} from 'react';

const MenuItem = ({menu}) => {
  const {storeId} = useParams();
  const store = stores.find((s) => s.id.toString() === storeId);
  const cartStore = useCartStore((state) => state.store);
  const addMenu = useCartStore((state) => state.addMenu);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMenu = () => {
    if (store.id !== cartStore.id) {
      setIsModalOpen(true);
      return;
    }
    addMenu(menu);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MenuItemWrapper>
      <img src="https://placehold.co/54x54" alt={menu.name} />
      <ItemDescWrapper>
        <NameWrapper>
          <h3>{menu.name}</h3>
          <h4>{menu.isBest ? "BEST" : ""}</h4>
        </NameWrapper>
        <span>{menu.price.toLocaleString('ko-KR')}원</span>
        <p>{menu.ingredients}</p>
      </ItemDescWrapper>
      <ButtonWrapper>
        <Button onClick={handleAddMenu} type="button" size="sm">담기</Button>
      </ButtonWrapper>
      {isModalOpen && (
        <ModalBackground onClick={handleCloseModal}>
          <ModalWrapper onClick={(e) => e.stopPropagation()}>
            <div>주문서에는 같은 가게만 담을 수 있어요</div>
            <Button onClick={handleCloseModal} type="button" size="xl">닫기</Button>
          </ModalWrapper>
        </ModalBackground>
      )}
    </MenuItemWrapper>
  );
};
export default MenuItem;
