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
import useCartStore from "../../pages/cartStore";

const Cart = () => {
  const store = useCartStore((state) => (state.store))
  const menus = useCartStore((state) => (state.menus))
  const totalPrice = (menus ? Object.values(menus) : []).reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
  // Object.values(menus)를 통해 메뉴 객체의 값을 배열 형태로 가져옴
  // menus가 빈 배열일 경우 값을 0으로 초기화
  const deliveryFee = store?.deliveryFee || 0;
  const minDeliveryPrice = store?.minDeliveryPrice || 0;

  return (
    <CartContainer>
      <DeviceStatusBar />
      <TopBar isCancelButtonEnabled={true} />

      <Separator heightType="medium" />

      <OrderInfoRow>
        <StoreName>{store?.name}</StoreName>
        {store?.minDeliveryPrice > totalPrice + deliveryFee ? (
          <MinDeliveryPriceAlert>최소금액 미달❗️</MinDeliveryPriceAlert>
        ) : null}
      </OrderInfoRow>
      {
        Object.values(menus).map((menu, index) => (
            <MenuItem key={menu.id} menu={menu} displayMode="cart" />
        ))
      }

      <Separator heightType="thin" />

      <AddMoreContainer>
        <AddMore> 더 담기 +</AddMore>
      </AddMoreContainer>

      <Separator heightType="medium" />

      <PriceInfoRow style={{ marginTop: "16px" }}>
        <PriceInfoTxt>주문금액</PriceInfoTxt>
        <PriceInfoPrice>{totalPrice}원</PriceInfoPrice>
      </PriceInfoRow>
      <PriceInfoRow>
        <PriceInfoTxt>배달요금</PriceInfoTxt>
        <PriceInfoPrice>{deliveryFee}원</PriceInfoPrice>
      </PriceInfoRow>
      <PriceInfoRow $istotalprice={"true"}>
        <PriceInfoTxt $istotalprice={"true"}>총 결제금액</PriceInfoTxt>
        <PriceInfoPrice $istotalprice={"true"}>{totalPrice + deliveryFee}원</PriceInfoPrice>
      </PriceInfoRow>

      <PaymentContainer>
        <MinDeliveryPriceNoti>
          최소 주문 금액 {minDeliveryPrice}원
        </MinDeliveryPriceNoti>
        <Button type="button" size="xl" disabled={totalPrice + deliveryFee < minDeliveryPrice}>
        {totalPrice + deliveryFee}원 결제하기
        </Button>
      </PaymentContainer>
    </CartContainer>
  );
};

export default Cart;
