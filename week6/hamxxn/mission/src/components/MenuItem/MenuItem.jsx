import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { MenuWrapper, MenuImg, MenuDescWrapper } from "./MenuItem.styles";

const MenuItem = ({ menu }) => {
  const navigate = useNavigate();

  const handleAddMenu = () => {
    const params = new URLSearchParams({
      name: menu.name,
      price: menu.price,
      ingredients: menu.ingredients,
    });

    navigate(`/cart?${params.toString()}`);
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
