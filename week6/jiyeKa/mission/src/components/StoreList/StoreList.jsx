import {Link} from 'react-router-dom';
import {StoresTitle, StoresWrapper, ListWrapper} from "./StoreList.styles";
import StoresDetail from "../StoresDetail/StoresDetail";
import useCartStore from '../../store/cartStore';

const StoresList = () => {
  const storeList = useCartStore((state) => state.storeList);
  const sortedStores = storeList.sort((a, b) => b.reviewCnt - a.reviewCnt); //리뷰 수 기준으로 정렬

  const topThreeStores = sortedStores.slice(0, 3); // 1~3위만 따로 스타일링
  const otherStores = sortedStores.slice(3);
  return (
    // <StoresWrapper>
    //   <StoresTitle>샐러드</StoresTitle>
    //   <ListWrapper>
    //   {/* <Link to={/store/ + 1} style={{textDecoration:"none", color:"#333D4B"}}>
    //     <StoresDetail inTopThree={1} restaurantName="샐로리 한남점" score="4.9" scoreCount="3,919" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
    //   </Link>
    //   <Link to={/store/ + 2} style={{textDecoration:"none", color:"#333D4B"}}>
    //     <StoresDetail inTopThree={2} restaurantName="옐로우푸드 샐러드" score="4.8" scoreCount="1,129" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
    //   </Link>
    //   <Link to={/store/ + 3} style={{textDecoration:"none", color:"#333D4B"}}>
    //     <StoresDetail inTopThree={3} restaurantName="씬더볼드 한남점" score="4.8" scoreCount="919" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
    //   </Link>
    //   <Link to={/store/ + 4} style={{textDecoration:"none", color:"#333D4B"}}>
    //     <StoresDetail restaurantName="THE 샐러드가득담은" score="5.0" scoreCount="27" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
    //   </Link>
    //   <Link to={/store/ + 5} style={{textDecoration:"none", color:"#333D4B"}}>
    //     <StoresDetail restaurantName="파스토보이" score="4.8" scoreCount="801" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
    //   </Link>
    //   <Link to={/store/ + 6} style={{textDecoration:"none", color:"#333D4B"}}>
    //     <StoresDetail restaurantName="힘난다 샐러드" score="4.1" scoreCount="24" deliveryTime1={13} deliveryTime2={30} deliveryTip="2,000" />
    //   </Link> */}
    //   </ListWrapper>
        
    // </StoresWrapper>
    <StoresWrapper>
      <StoresTitle>샐러드</StoresTitle>
      <ListWrapper>
        {/* 상위 1~3등 가게 렌더링 */}
        {topThreeStores.map((store, index) => (
          <Link
            key={store.id}
            to={`/store/${store.id}`} // 가게 ID를 URL에 포함
            style={{ textDecoration: "none", color: "#333D4B" }}
          >
            <StoresDetail
              inTopThree={index + 1}
              restaurantName={store.name}
              score={store.rate}
              scoreCount={store.reviewCnt.toLocaleString()}
              deliveryTime1={store.minDeliveryTime}
              deliveryTime2={store.maxDeliveryTime}
              deliveryTip={store.deliveryFee.toLocaleString()}
            />
          </Link>
        ))}

        {/* 나머지 가게 목록 렌더링 */}
        {otherStores.map((store) => (
          <Link
            key={store.id}
            to={`/store/${store.id}`} // 가게 ID를 URL에 포함
            style={{ textDecoration: "none", color: "#333D4B" }}
          >
            <StoresDetail
              restaurantName={store.name}
              score={store.rate}
              scoreCount={store.reviewCnt.toLocaleString()}
              deliveryTime1={store.minDeliveryTime}
              deliveryTime2={store.maxDeliveryTime}
              deliveryTip={store.deliveryFee.toLocaleString()}
            />
          </Link>
        ))}
      </ListWrapper>
    </StoresWrapper>
  );
};
export default StoresList;