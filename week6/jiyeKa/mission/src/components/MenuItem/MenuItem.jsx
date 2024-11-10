import Button from "../Button";
import {MenuItemContainer} from './MenuItem.styles'
const MenuItem = ({ menu }) => {
  const handleAddMenu = () => {};

  return (
    <div>
      <MenuItemContainer>
      <img src="http://placehold.co/54x54" alt="" />
      </MenuItemContainer>
      <h3>{menu.name}</h3>
      <span>{menu.price}</span>
      <p>{menu.ingredients}</p>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
