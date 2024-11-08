import React from "react";
import Button from "../Button";
import styles from "./OrderBar.module.css";

const OrderBar = () => {
    const menus = [];
    const store = null;
    const handleOrder = () => { };

    return (
        <div className={styles.container}>
            <div className={styles.totalAmountContainer}>
                <div className={styles.totalAmountText}>총 주문금액</div>
                <div className={styles.totalAmount}>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</div>
            </div>
            <Button onClick={handleOrder} type="button" size="lg">
                {store?.name && `${store.name}에서 `}주문하기
            </Button>
        </div>
    );
};

export default OrderBar;