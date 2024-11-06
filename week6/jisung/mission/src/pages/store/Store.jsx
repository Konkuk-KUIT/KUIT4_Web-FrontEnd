import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import DeviceStatusBar from "../../components/DeviceStatus/DeviceStatusBar";
import TopBar from "../../components/TopBar/TopBar";

import stores from "../../models/stores";

import {
    StoreInfoContainer,
  StoreName,
  StoreRate,
  StoreReviewCnt,
  StoreDetailedInfo,
  MenuCategory
} from "./Store.styles";

const Store = () => {
  const { storeId } = useParams();
  // React Router의 useParams 훅을 사용해 URL에 포함된 동적 파라미터 값을 가져옴
  // 예를 들어 /stores/2 와 같은 URL로 접근하면 storeId의 값이 2가 됨
  // useParams()는 { storeId: '123' } 형태의 객체로 반환하고,
  // 구조분해 할당을 통해 storeId 값을 별도로 추출해서 사용할 수 있음

  // 이떄 Router.jsx에서 /store/:storeId 를 path로 설정했기 때문에
  // path의 파라미터값을 받으려면 useParams에서도 무조건 storeId로 받아야 함
  // 즉 Router.jsx의 path: "/store/:storeId"와 const { storeId } = useParams()의 변수 이름이 일치해야 함

  const store = stores.find((store) => store.id.toString() === storeId);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <DeviceStatusBar />
      <TopBar />

      {/* 가게 정보 */}
      <StoreInfoContainer>
        <StoreName>{store.name}</StoreName>
        <StoreRate>⭐️ {store.rate} </StoreRate>
        <StoreReviewCnt>리뷰 {store.reviewCnt}</StoreReviewCnt>
        <div>
          <StoreDetailedInfo>결제방법</StoreDetailedInfo>
          <StoreDetailedInfo>토스결제만 현장결제 안됨</StoreDetailedInfo>
        </div>
        <div>
          <StoreDetailedInfo>최소주문</StoreDetailedInfo>
          <StoreDetailedInfo>{store.minDeliveryPrice}</StoreDetailedInfo>
        </div>
        <div>
          <StoreDetailedInfo>배달시간</StoreDetailedInfo>
          <StoreDetailedInfo>
            약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
          </StoreDetailedInfo>
        </div>
      </StoreInfoContainer>

      {/* 메뉴 정보 */}
      <MenuCategory>샐러드</MenuCategory>
      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
