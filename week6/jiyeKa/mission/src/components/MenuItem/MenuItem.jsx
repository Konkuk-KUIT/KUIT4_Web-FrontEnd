import Button from "../Button";
import {MenuItemContainer} from './MenuItem.styles'
import storeList from "../../assets/storeList.svg"
import useCartStore from "../../store/cartStore.js"

const MenuItem = ({ menu }) => {

  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <div>
      <MenuItemContainer>
      <img src={storeList} />
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
