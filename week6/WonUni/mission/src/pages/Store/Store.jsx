import { useParams } from "react-router-dom";
import styled from "styled-components";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import StatusBar from "../StatusBar/StatusBar";
import stores from "../../models/stores";
import ColorStar from "../../assets/ColorStar.svg";

const StyledH1 = styled.h1`
  display: flex;
  padding: 26px 225px 2px 24px;
  margin: 0px;
  align-items: center;
  color: #191F28;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const StyledDiv = styled.div`
  width: 367px;
  padding-left: 23px;
  height: 31px;
  padding-top: 7px;
  color: #4E5968;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const StyledDiv2 = styled.div`
  display: flex;
  gap: 12px;
  padding-left: 24px;
  padding-top: 0px;
  height: 28px;
  font-size: 12px;
`


const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((store) => store.id.toString() === storeId);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div style={{
      width: "390px",
      }}>
      <StatusBar back={true} cancel={false} link={"/stores"}/>
      <div style={{
        borderBottom: "1px solid #6B7684",
        paddingBottom: "24px"
      }}>
        <StyledH1>{store.name}</StyledH1>
        <StyledDiv> <img src={ColorStar}/> {store.rate} 리뷰{store.reviewCnt}</StyledDiv>
        <StyledDiv2>
          <p>결제방법</p><p>토스결제만 현장결제 안됨</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>최소주문</p><p>{store.minDeliveryPrice}원</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>배달시간</p><p>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</p>
        </StyledDiv2>
      </div>
      <div style={{
        padding: "26px 0px 0px 24px",
        color: "#6B7684",
        height: "31px",
        fontSize: "15px",
        fontWeight: "600"
        
      }}>
        샐러드
      </div>
      <div style={{
        width:"390px"
      }}>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
