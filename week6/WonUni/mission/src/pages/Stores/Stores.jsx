import StatusBar from "../StatusBar/StatusBar";
import stores from "../../models/stores";
import StoresItems from "../../components/StoresItems/StoresItems";
import styled from "styled-components"
import OrderBar from "../../components/OrderBar/OrderBar";
import { Link } from "react-router-dom";

const StyledStoreName = styled.div`
  display: flex;
  width: 366px;
  height: 31px;
  padding: 26px 0 2px 24px;
  align-items: center;
  color: #191F28;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`



const Stores = () => {
  return (
    <>
      <StatusBar back={true} cancel={false} link={"/"}/>
      <StyledStoreName>샐러드</StyledStoreName>
      <div>
        
        {stores.map((storeInfo)=>(
          <Link to={`/store/${storeInfo.id}`}>
            <StoresItems key={storeInfo.id} storeInfo={storeInfo} />
          </Link>
        ))}
      </div>
      <OrderBar/>
    </>
  );
};

export default Stores;
