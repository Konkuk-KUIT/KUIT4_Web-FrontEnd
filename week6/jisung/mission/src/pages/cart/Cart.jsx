import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import DeviceStatusBar from "../../components/DeviceStatus/DeviceStatusBar";
import Separator from "../../components/Separator";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";
import Button from "../../components/Button";
import {
    CartContainer,
  OrderInfoRow,
  StoreName,
  MinDeliveryPriceAlert,
  AddMoreContainer,
  AddMore,
  PriceInfoRow,
  PriceInfoPrice,
  PriceInfoTxt,
  PaymentContainer,
  MinDeliveryPriceNoti,
} from "./Cart.styles";

const Cart = () => {
  const store = stores.find((store) => store.id === 1);
  const menu = store.menus.find((menu) => menu.id === 1);

  return (
    <CartContainer>
      <DeviceStatusBar />
      <TopBar isCancelButtonEnabled={true} />

      <Separator heightType="medium" />

      <OrderInfoRow>
        <StoreName>샐로리 한남점</StoreName>
        {store.minDeliveryPrice > 10000 ? (
          <MinDeliveryPriceAlert>최소금액 미달❗️</MinDeliveryPriceAlert>
        ) : null}
      </OrderInfoRow>
      <MenuItem menu={menu} displayMode="cart" />

      <Separator heightType="thin" />

      <AddMoreContainer>
        <AddMore> 더 담기 +</AddMore>
      </AddMoreContainer>

      <Separator heightType="medium" />

      <PriceInfoRow style={{ marginTop: "16px" }}>
        <PriceInfoTxt>주문금액</PriceInfoTxt>
        <PriceInfoPrice> 10,600원</PriceInfoPrice>
      </PriceInfoRow>
      <PriceInfoRow>
        <PriceInfoTxt>배달요금</PriceInfoTxt>
        <PriceInfoPrice>2,000원</PriceInfoPrice>
      </PriceInfoRow>
      <PriceInfoRow $istotalprice={"true"}>
        <PriceInfoTxt $istotalprice={"true"}>총 결제금액</PriceInfoTxt>
        <PriceInfoPrice $istotalprice={"true"}>12,600원</PriceInfoPrice>
      </PriceInfoRow>

      <PaymentContainer>
        <MinDeliveryPriceNoti>
          최소 주문 금액 {store.minDeliveryPrice}원
        </MinDeliveryPriceNoti>
        <Button type="button" size="xl" disabled={true}>
            12,600원 결제하기
          </Button>
      </PaymentContainer>
    </CartContainer>
  );
};

export default Cart;
