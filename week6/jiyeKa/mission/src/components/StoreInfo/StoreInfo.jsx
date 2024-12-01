import {useParams} from "react-router-dom";
import MenuItem from "../../components/MenuItem/MenuItem";
import star from "../../assets/star.svg";
import {NoStoreWrapper, StoreInfoWrapper, InfoWrapper, MenuWrapper} from "./StoreInfo.styles";
import { useState, useEffect } from "react";
import { getStore } from "../../apis/stores";
import useCartStore from "../../store/cartStore";

const StoreInfo = () => {
  const {storeId} = useParams();
  // const store = stores.stores.find((store) => store.id.toString() === storeId);
  const [store, setStore] = useState();
  const addMenu = useCartStore((state) => state.addMenu);

  useEffect(() => {
    getStore(storeId).then(value => setStore(value)); //api 사용해서 id를 통한 store 찾기
  }, [storeId]) 

  const handleAddMenu = (menu) => {
    //
    addMenu(menu, store)
  }


  if (!store) {
    return (
      <NoStoreWrapper>
        <div className="noStore">가게를 찾을 수 없어요 🥺</div>
      </NoStoreWrapper>
    );
  };

  return (
    <StoreInfoWrapper>
      <InfoWrapper>
        <h1>{store.name}</h1>
        <div className="storeReputation">
          <img src={star} alt="star" />
          <div className="storeRate">{store.rate}</div>
          <div className="storeReviewCnt">리뷰 {store.reviewCnt}</div>
        </div>
        <div className="desc">
          <div className="descLine">
            <span className="descTitle">결제방법</span><span>토스결제만 현장결제 안됨</span>
          </div>
          <div className="descLine">
            <span className="descTitle">최소주문</span><span>{store.minDeliveryPrice}원</span>
          </div>
          <div className="descLine">
            <span className="descTitle">배달시간</span><span>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</span>
          </div>
        </div>
      </InfoWrapper>
      <MenuWrapper>
        <div className="category">샐러드</div>
        <div className="storeMenu">
          {store.menus.map((menu) => {
            return (
              <MenuItem key={menu.id} menu={menu} handleAddMenu={() => handleAddMenu(menu)}/>
            );
          })}
        </div>
      </MenuWrapper>
    </StoreInfoWrapper>
  );
};
export default StoreInfo;
