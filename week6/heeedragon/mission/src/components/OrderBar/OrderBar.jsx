import React from "react";
import Button from "../Button";
import styles from "./OrderBar.module.css";
import useCartStore from "../../pages/Cart/cartStore";
import { useNavigate } from "react-router-dom";

const OrderBar = () => {
    const menus = useCartStore((state) => state.menus);
    const store = useCartStore((state) => state.store);
    const navigate = useNavigate();

    const handleOrder = () => {
        if (menus.length === 0) {
            return;
        }

        navigate("/cart");
    };

    const isCartEmpty = menus.length === 0;

    return (
        <div className={styles.container}>
            <div className={styles.totalAmountContainer}>
                <div className={styles.totalAmountText}>총 주문금액</div>
                <div className={styles.totalAmount}>{menus.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}원</div>
            </div>
            <Button onClick={handleOrder} type="button" size="lg" disabled={isCartEmpty}>
                {store?.name && `${store.name}에서 `}주문하기
            </Button>
        </div>
    );
};

export default OrderBar;