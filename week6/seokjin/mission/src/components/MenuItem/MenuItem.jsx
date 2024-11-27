import Button from "../Button";
import { StyledDiv } from "./MenuItem.styles";  
import PlaceholderIcon from "../../assets/placeholder.svg"
import useCartStore from "../../store/cartStore";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const store = useCartStore((state)=> state.store) // 추가. handleAddMenu 함수에서 메뉴 정보를 addMenu 함수에 전달할 때 선택된 가게의 정보도 함께 넘기도록

  const handleAddMenu = () => {
    addMenu({
      ...menu,
      storeId: store.id,
      store: store,
      deliveryFee: store.deliveryFee,
      minOrderPrice: store.minDeliveryPrice,
    }); // 기존 addMenu(menu);변경
  };

  return (
    <StyledDiv>
      <div className="img-container">
        <img src={PlaceholderIcon} alt="placeholder" />
      </div> 
      <div className="text-container">
        <p className="menu-name">{menu.name}</p>
        <span>{menu.price}</span>
        <p className="menu-ingredient">{menu.ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </StyledDiv>
  );
};

export default MenuItem;
