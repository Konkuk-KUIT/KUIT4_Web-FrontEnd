// OrderBar.jsx
import React from 'react';
import { OrderBarContainer, TotalAmount ,TotalAmountText,BlackBar,BlackBarin} from './OrderBar.styles'; // 스타일 가져오기
import Button from '../Button';
const OrderBar = () => {
  const menus = []; // 메뉴 목록
  const store = null; // 스토어 정보
  const handleOrder = () => {}; // 주문 처리 함수

  return (
    <OrderBarContainer>
      <TotalAmountText>총 주문금액</TotalAmountText>
      <TotalAmount>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</TotalAmount>
      <Button onClick={handleOrder} type="button" size="lg">
        {store?.name && `${store.name}에서 `}주문하기
      </Button>
      <BlackBar><BlackBarin><img src="/blackbar.svg" alt="blackout" /></BlackBarin></BlackBar>
    </OrderBarContainer>
  );
};

export default OrderBar;
