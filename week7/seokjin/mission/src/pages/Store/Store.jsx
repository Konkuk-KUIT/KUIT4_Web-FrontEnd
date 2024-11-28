import { useParams } from "react-router-dom";
import { useEffect } from "react";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import Top from "../../components/Top/Top";
import stores from "../../models/stores";
import InformationGroup from "../../components/InformationGroup/InformationGroup";

import styled from 'styled-components';
import StyledScrollContainer from "../../components/ScrollContainer/ScrollContainer.styles";
import HomeIndicator from "../../components/HomeIndicator/HomeIndicator";
import useCartStore from "../../store/cartStore";


const StyledH1 = styled.h1`
  margin: 0;
  width: 390px;
  height: 59px;
  padding-left: 24px;
  padding-top: 26px;
  padding-bottom: 4px;
  box-sizing: border-box;`
;

const CategoryName = styled.div`
  width: 390px;
  height: 57px;
  padding-top: 26px;
  padding-left: 24px;
  box-sizing: border-box;

  p {
    margin: 0;
    color: #6B7684;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }`
;

export { StyledH1, CategoryName };


const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((store) => store.id.toString() === storeId);
  const setStore = useCartStore((state) => state.setStore);


  
  useEffect(() => {
    if (store) {
      setStore(store); // zustand 전역 상태에 store 설정
    }
  }, [store, setStore]); // storeId가 변경될 때마다 실행되도록 수정

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }
  
  return (
    <>
    <Top />
    <div>
      <StyledH1>{store.name}</StyledH1>
      <InformationGroup store={store}/>
      <CategoryName><p>샐러드</p></CategoryName>
      <div>
        <StyledScrollContainer>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={{ ...menu, storeId: store.id }} />;
        })}
        </StyledScrollContainer>
      </div>
      <OrderBar />
      <HomeIndicator/>
    </div>
    </>
  );
};

export default Store;