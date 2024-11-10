import { Wrapper } from "../../components/Wrapper.styles";
import HeaderBar from "../../components/HeaderBar";
import StoreItem from "../../components/StoreItem/StoreItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import styled from "styled-components";

const Title = styled.p`
  width: 68px;
  height: 31px;
  margin-top: 26px;
  margin-left: 24px;
  font-size: 26px;
  font-weight: 700;
  color: #191f28;
`;
const Stores = () => {
  return (
    <Wrapper>
      <HeaderBar />
      <Title>샐러드</Title>
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <OrderBar />
    </Wrapper>
  );
};

export default Stores;
