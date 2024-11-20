import Category from "../../components/FoodCategory/FoodCategory";
import Pizza from "../../assets/pizza.svg";
import styled from "styled-components";

const Categorys = () => {
  return (
    <CategoryWrapper>
      <Category name="샐러드" src={Pizza} />
      <Category name="피자" src={Pizza} />
      <Category name="피자" src={Pizza} />
      <Category name="피자" src={Pizza} />
      <Category name="피자" src={Pizza} />
      <Category name="피자" src={Pizza} />
      <Category name="피자" src={Pizza} />
      <Category name="피자" src={Pizza} />
      <Category name="피자" src={Pizza} />
      <Category name="피자" src={Pizza} />
      <Category name="피자" src={Pizza} />
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
