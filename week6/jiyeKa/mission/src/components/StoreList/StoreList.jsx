import {Link} from 'react-router-dom';
import {StoresTitle, StoresWrapper, ListWrapper} from "./StoreList.styles";
import StoresDetail from "../StoresDetail/StoresDetail";

const StoresList = () => {
  return (
    <StoresWrapper>
      <StoresTitle>샐러드</StoresTitle>
      <ListWrapper>
      <Link to={/store/ + 1} style={{textDecoration:"none", color:"#333D4B"}}>
        <StoresDetail inTopThree={1} restaurantName="샐로리 한남점" score="4.9" scoreCount="3,919" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
      </Link>
      <Link to={/store/ + 2} style={{textDecoration:"none", color:"#333D4B"}}>
        <StoresDetail inTopThree={2} restaurantName="옐로우푸드 샐러드" score="4.8" scoreCount="1,129" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
      </Link>
      <Link to={/store/ + 3} style={{textDecoration:"none", color:"#333D4B"}}>
        <StoresDetail inTopThree={3} restaurantName="씬더볼드 한남점" score="4.8" scoreCount="919" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
      </Link>
      <Link to={/store/ + 4} style={{textDecoration:"none", color:"#333D4B"}}>
        <StoresDetail restaurantName="THE 샐러드가득담은" score="5.0" scoreCount="27" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
      </Link>
      <Link to={/store/ + 5} style={{textDecoration:"none", color:"#333D4B"}}>
        <StoresDetail restaurantName="파스토보이" score="4.8" scoreCount="801" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
      </Link>
      <Link to={/store/ + 6} style={{textDecoration:"none", color:"#333D4B"}}>
        <StoresDetail restaurantName="힘난다 샐러드" score="4.1" scoreCount="24" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
      </Link>
      </ListWrapper>
        
    </StoresWrapper>
  );
};
export default StoresList;