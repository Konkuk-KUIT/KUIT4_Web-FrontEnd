import {useParams} from "react-router-dom";
import stores from "../../models/stores";
import MenuItem from "../../components/MenuItem/MenuItem";
import Star from "../../assets/star-yellow.svg";
import {NoStoreWrapper, StoreInfoWrapper, InfoWrapper, MenuWrapper} from "./StoreInfo.styles";
import {useEffect} from "react";
import useCartStore from "../../store/cartStore";

const StoreInfo = () => {
  const {storeId} = useParams();
  const store = stores.find((s) => s.id.toString() === storeId);
  const menus = useCartStore((state) => state.menus);
  const setStore = useCartStore((state) => state.setStore);

  useEffect(() => {
    if (menus.length == 0) {
      setStore(store);
    }
  }, []);

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
          <img src={Star} alt="star" />
          <div className="storeRate">{store.rate}</div>
          <div className="storeReviewCnt">리뷰{store.reviewCnt.toLocaleString('ko-KR')}</div>
        </div>
        <div className="desc">
          <div className="descLine">
            <span className="descTitle">결제방법</span><span>토스결제만 현장결제 안됨</span>
          </div>
          <div className="descLine">
            <span className="descTitle">최소주문</span><span>{store.minDeliveryPrice.toLocaleString('ko-KR')}원</span>
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
              <MenuItem key={menu.id} menu={menu} />
            );
          })}
        </div>
      </MenuWrapper>
    </StoreInfoWrapper>
  );
};
export default StoreInfo;