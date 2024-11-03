import OrderBar from "../../components/OrderBar/OrderBar";
import StatusBar from "../../components/StatusBar/StatusBar";
import StoreDetail from "../../components/StoreDetail/StoreDetail";
import { CategoryTitle, StoreDetailWrapper } from "./Store.styles";

const Stores = () => {
  const statusBarHeight = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--status-bar");
  const widthV = getComputedStyle(document.documentElement).getPropertyValue(
    "--width-variable"
  );

  return (
    <>
      <StatusBar back={true} />
      <div
        style={{
          marginTop: statusBarHeight,
          padding: "20px 20px",
          width: widthV,
        }}
      >
        <CategoryTitle>샐러드</CategoryTitle>
        <StoreDetailWrapper>
          <StoreDetail
            name="샐러리 한남점"
            rating="4.9"
            reviewCount="3,199"
            deliveryTimeMin="13"
            deliveryTimeMax="30"
            deliveryFee="2000"
            rank="1"
          />
          <StoreDetail
            name="아"
            rating="4.9"
            reviewCount="3,199"
            deliveryTimeMin="13"
            deliveryTimeMax="30"
            deliveryFee="2000"
            rank="2"
          />
          <StoreDetail
            name="으악"
            rating="4.9"
            reviewCount="3,199"
            deliveryTimeMin="13"
            deliveryTimeMax="30"
            deliveryFee="2000"
            rank="3"
          />
          <StoreDetail
            name="휴"
            rating="4.9"
            reviewCount="3,199"
            deliveryTimeMin="13"
            deliveryTimeMax="30"
            deliveryFee="2000"
          />
          <StoreDetail
            name="힘안난다 샐러드"
            rating="4.9"
            reviewCount="3,199"
            deliveryTimeMin="13"
            deliveryTimeMax="30"
            deliveryFee="2000"
          />
        </StoreDetailWrapper>
      </div>
      <OrderBar />
    </>
  );
};

export default Stores;
