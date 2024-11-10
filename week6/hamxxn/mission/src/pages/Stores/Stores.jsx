import { useSearchParams } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";
import StatusBar from "../../components/StatusBar/StatusBar";
import StoreDetail from "../../components/StoreDetail/StoreDetail";
import { CategoryTitle, StoreDetailWrapper } from "./Store.styles";

import stores from "../../models/stores.js";

const addRankToStores = (stores) => {
  const sortedStores = [...stores].sort((a, b) => b.rate - a.rate);

  // 상위 3개에 rank 속성 추가
  return sortedStores.map((store, index) => {
    if (index < 3) {
      return { ...store, rank: index + 1 };
    }
    return store;
  });
};
const Stores = () => {
  const statusBarHeight = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--status-bar");
  const widthV = getComputedStyle(document.documentElement).getPropertyValue(
    "--width-variable"
  );

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sortStores = addRankToStores(stores);
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
        <CategoryTitle>{category}</CategoryTitle>
        <StoreDetailWrapper>
          {sortStores.map((store) => (
            <StoreDetail key={store.id} store={store} />
          ))}
        </StoreDetailWrapper>
      </div>
      <OrderBar />
    </>
  );
};

export default Stores;
