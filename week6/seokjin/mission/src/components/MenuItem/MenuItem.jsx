import Button from "../Button";
import { StyledDiv } from "./MenuItem.styles";  
import PlaceholderIcon from "../../assets/placeholder.svg"

const MenuItem = ({ menu }) => {
  const handleAddMenu = () => {};

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
