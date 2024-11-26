import MainText from "../../components/MainText/MainText";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo/StoreInfo";
import Top from "../../components/Top/Top";
import StyledScrollContainer from "../../components/ScrollContainer/ScrollContainer.styles";
import stores from "../../models/stores"; // stores 데이터 불러오기
import styled from "styled-components";
import HomeIndicator from "../../components/HomeIndicator/HomeIndicator";
import { Link } from "react-router-dom";


const StoreListContainer = styled.div`
  max-height: 586px; 
  overflow-y: scroll;
  padding-bottom: 20px; 

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    width: 0px; /* 스크롤바의 너비를 0으로 설정 */
    background: transparent; /* 스크롤바의 배경을 투명하게 설정 */
  }
`;

const Stores = () => {
  return (
    <>
    <Top />
    <MainText />
    <StyledScrollContainer>      
    {stores.map((store) => (
      <Link to={`/store/${store.id}`} key={store.id} style={{ textDecoration: "none"}}>
          <StoreInfo
            name={store.name}
            rate={store.rate}
            reviewCnt={store.reviewCnt}
            minDeliveryTime={store.minDeliveryTime}
            maxDeliveryTime={store.maxDeliveryTime}
            deliveryFee={store.deliveryFee}
          />
        </Link>
        ))}   
    </StyledScrollContainer>
    <OrderBar/>
    <HomeIndicator />
    </>
  );
};

export default Stores;
