import Button from "../Button";

const OrderBar = () => {
    const menus = [];
    const store = null;
    const handleOrder = () => { };

    return (
        <div>
            <div>총 주문금액</div>
            <div>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</div>
            <Button onClick={handleOrder} type="button" size="lg">
                {store?.name && `${store.name}에서 `}주문하기
            </Button>
        </div>
    );
};

export default OrderBar;
