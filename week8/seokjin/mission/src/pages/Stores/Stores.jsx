import MainText from "../../components/MainText/MainText";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo/StoreInfo";
import Top from "../../components/Top/Top";
import StyledScrollContainer from "../../components/ScrollContainer/ScrollContainer.styles";
//import stores from "../../models/stores"; // stores 데이터 불러오기
import styled from "styled-components";
import HomeIndicator from "../../components/HomeIndicator/HomeIndicator";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStores } from '../../apis/stores'

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

  // stores 데이터를 저장할 상태 추가
  const [stores, setStores] = useState([]);

   // 서버에서 stores 데이터를 가져오는 useEffect 추가
   useEffect(() => {
    // 서버에서 stores 데이터 불러오기
    const fetchStores = async () => {
      try {
        const data = await getStores();
        console.log(data); // 데이터를 콘솔에 출력하여 확인
        setStores(data); // 서버에서 가져온 데이터 설정
      } catch (error) {
        console.error("가게 정보를 불러오는데 실패했습니다:", error);
      }
    };

    fetchStores();
  }, []);

  // stores 데이터가 로드되지 않았을 때 로딩 메시지 추가
  if (stores.length === 0) {
    return <div>가게 정보를 불러오는 중입니다...</div>;
  }

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
