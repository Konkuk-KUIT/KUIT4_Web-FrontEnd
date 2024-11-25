import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreItem from "../../components/StoreItem/StoreItem";
import DeviceStatusBar from "../../components/DeviceStatus/DeviceStatusBar";
import { CategoryTitle } from "./Stores.styles";

const Stores = () => {
  return (
    <div>
      <DeviceStatusBar />
      <TopBar isBackButtonEnabled={true} />
      <CategoryTitle> 샐러드 </CategoryTitle>
      <StoreItem />
      <OrderBar />
    </div>
  );
};

export default Stores;
