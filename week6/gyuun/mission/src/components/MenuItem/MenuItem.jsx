import Button from "../Button";
import { SaladBox, GrayCircle, SaladName, SaladBest, SaladPrice, Saladingredient } from './MenuItem.styles';

const MenuItem = ({ menu }) => {
  const handleAddMenu = () => {};

  return (
    <SaladBox>
      <GrayCircle/>
      <SaladName>{menu.name}</SaladName>
      <SaladBest/>
      <SaladPrice>{menu.price}</SaladPrice>
      <Saladingredient>{menu.ingredients}</Saladingredient>
      
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
      </SaladBox>
    

  );
};

export default MenuItem;
