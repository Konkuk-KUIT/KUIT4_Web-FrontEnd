import React from "react";
import {
  TextContainer,
  StyledText1,
  StyledText2,
  CategoryListContainer,
  CategoryItemContainer,
  CategoryTextStyle,
} from "./Category.styles";
import TopBar from "../../components/TopBar/TopBar";
import DeviceStatusBar from "../../components/DeviceStatus/DeviceStatusBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import pizza from "../../assets/Image/pizza.png";

const Category = () => {
  const CategoryText = () => {
    return (
      <TextContainer>
        <StyledText1> 오늘은 무엇을 먹을까요? </StyledText1>
        <StyledText2>
          {" "}
          한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;{" "}
        </StyledText2>
      </TextContainer>
    );
  };

  const CategoryList = () => {
    return (
      <CategoryListContainer>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </CategoryListContainer>
    );
  };

  const CategoryItem = () => {
    return (
      <CategoryItemContainer>
        <img
          style={{ width: "28px", height: "28px" }}
          src={pizza}
          alt="Pizza"
        />
        <CategoryTextStyle> 피자 </CategoryTextStyle>
      </CategoryItemContainer>
    );
  };

  return (
    <div>
      <DeviceStatusBar />
      <CategoryText />
      <CategoryList />
      <OrderBar />
    </div>
  );
};

export default Category;
