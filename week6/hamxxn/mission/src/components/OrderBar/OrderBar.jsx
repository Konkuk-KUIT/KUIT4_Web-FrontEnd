import Button from "../Button";
import { OrderContainer, PriceWrapper } from "./OrderBar.styles.jsx";
import BottomBar from "../../assets/bottomBar.svg";

const OrderBar = ({
  priceDesc,
  btnDisable,
  btnWidth,
  btnHeight,
  btnSize,
  priceflexdirection,
  divflexdirction,
  ...props
}) => {
  const menus = [];
  const store = null;
  const handleOrder = () => {};

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        boxSizing: "border-box",
      }}
    >
      <OrderContainer divflexdirction={divflexdirction}>
        <PriceWrapper priceflexdirection={priceflexdirection}>
          <div className="price-desc">{priceDesc} 주문금액</div>
          <div className="price">
            {menus.reduce((acc, cur) => acc + cur.price, 0)}원
          </div>
        </PriceWrapper>
        <Button
          onClick={handleOrder}
          type="button"
          size={btnSize}
          width={btnWidth}
          height={btnHeight}
          disabled={btnDisable}
        >
          {store?.name && `${store.name}에서 `}주문하기
        </Button>
      </OrderContainer>
      <img src={BottomBar} />
    </div>
  );
};

export default OrderBar;
