import { CategoryWrapper } from "./FoodCategory.styles";
const FoodCategory = ({ name, src, onClick }) => {
  return (
    <CategoryWrapper onClick={onClick}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </CategoryWrapper>
  );
};

export default FoodCategory;
