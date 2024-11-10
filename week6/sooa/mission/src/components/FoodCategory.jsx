import styled from "styled-components";
import Pizza from "../assets/food-category.svg";

const StyledFoodCategory = styled.div`
  width: 108px;
  height: 74px;
  border-radius: 8px;
  background-color: #fafafb;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    margin-bottom: 4px;
  }
  > span {
    font-size: 14px;
    font-weight: 600;
    color: #333d4b;
  }
`;

const FoodCategory = ({ children }) => {
  return (
    <StyledFoodCategory>
      <img src={Pizza} />
      <span>{children}</span>
    </StyledFoodCategory>
  );
};

export default FoodCategory;
