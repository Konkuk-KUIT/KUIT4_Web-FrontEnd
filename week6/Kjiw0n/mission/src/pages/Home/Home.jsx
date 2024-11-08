import styled from "styled-components";
import FoodCategory from "../../components/Home/FoodCategory";
import { Title } from "../../styles/FontStyle";

const dummyCategories = [
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "pizza.svg", imgAlt: "pizza icon", name: "피자" },
  { img: "meatballsMenu.svg", imgAlt: "meatballs menu icon", name: "더보기" },
];

const Home = () => {
  return (
    <div>
      <HomeTextWrapper>
        <Title>오늘은 무엇을 먹을까요?</Title>
        <Content>한남중앙로 40길 (한남 빌리지)(으)로 배달 {">"}</Content>
      </HomeTextWrapper>
      <HomeWrapper>
        {dummyCategories.map((category, index) => (
          <FoodCategory key={index} category={category} />
        ))}
      </HomeWrapper>
    </div>
  );
};

export default Home;

const HomeTextWrapper = styled.section`
  display: flex;
  margin-top: 41px;
  padding: 25px 68px 4px 24px;
  flex-direction: column;
  align-items: flex-start;
`;

const Content = styled.p`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const HomeWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  column-gap: 9px;

  margin: 74px 24px 0 24px;
`;
