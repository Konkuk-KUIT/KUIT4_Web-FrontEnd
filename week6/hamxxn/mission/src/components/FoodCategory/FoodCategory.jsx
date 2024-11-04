import { CategoryWrapper } from "./FoodCategory.styles";
import { useNavigate } from "react-router-dom";

const FoodCategory = ({ name, src }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (e) => {
    navigate("/store?category=" + name);
  };
  return (
    <CategoryWrapper onClick={handleCategoryClick}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </CategoryWrapper>
  );
};

export default FoodCategory;
