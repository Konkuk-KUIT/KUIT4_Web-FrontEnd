import Category from "../../components/FoodCategory/FoodCategory";
import Pizza from "../../assets/pizza.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Categorys = () => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    console.log("ii");
    navigate("/store");
  };
  return (
    <CategoryWrapper>
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
      <Category name="피자" src={Pizza} onClick={handleCategoryClick} />
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`
  width: var(--width-variable);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  padding: 20px 0px;
  box-sizing: border-box;
`;
export default Categorys;
