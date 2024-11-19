import React from "react";
import Header from "../../components/Header";
import useCartStore from "./cartStore";
import styles from "./Cart.module.css";
import Button from "../../components/Button";

const Cart = () => {
    const menus = useCartStore((state) => state.menus);
    const store = useCartStore((state) => state.store);
    const addMenu = useCartStore((state) => state.addMenu);

    const totalOrderAmount = menus.reduce((acc, menu) => acc + menu.price * menu.quantity, 0);

    const minimumOrderAmount = store?.minDeliveryPrice || 0;
    const deliveryFee = store?.deliveryFee || 0;

    const handlePayment = () => { };

    return (
        <div>
            <Header />
            <div>

                <div className={styles.gap}></div>

                <div>
                    <div className={styles.storeTitle}>
                        <div className={styles.storeName}>{store?.name}</div>
                        <div className={styles.orderDeny}>
                            {totalOrderAmount > minimumOrderAmount ? (<></>) :
                                (
                                    <div>
                                        <div>최소금액 미달</div>
                                        <img src="" />
                                    </div>
                                )}
                        </div>
                    </div>

                    <div>
                        <div>
                            {menus.map((menu) => (
                                <div key={menu.id} className={styles.menuDetail}>
                                    <div className={styles.menuDec}>
                                        <div className={styles.menuName}>{menu.name}</div>
                                        <div className={styles.menuIng}>{menu.ingredients}</div>
                                        <div className={styles.menuPrice}>{menu.price}원</div>
                                    </div>
                                    <div className={styles.menuCheck}>
                                        <div className={styles.menuQuan}>{menu.quantity}개</div>
                                        <img src="" alt=">"></img>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.returnStore}>
                            <div>더 담기</div>
                            <img src="../../../public/plusIcon.svg"></img>
                        </div>

                        <div className={styles.gap}></div>

                        <div className={styles.summary}>
                            <img></img>
                            <div className={styles.summaryRow}>
                                <div className={styles.text}>주문금액</div>
                                <div className={styles.amount}>{totalOrderAmount}원</div>
                            </div>
                            <div className={styles.summaryRow}>
                                <div className={styles.text}>배달요금</div>
                                <div className={styles.amount}>{deliveryFee}원</div>
                            </div>
                            <div className={styles.summaryRow}>
                                <div className={styles.text2}>총 결제금액</div>
                                <div className={styles.amount2}>{(totalOrderAmount + deliveryFee)}원</div>
                            </div>
                        </div>

                        <div className={styles.minimumOrderAmount}>
                            최소 주문금액 {minimumOrderAmount}원
                        </div>
                    </div>
                </div>

                <Button onClick={handlePayment} type="button" size="xl" disabled={totalOrderAmount < minimumOrderAmount}>
                    {totalOrderAmount}원 결제하기
                </Button>
            </div>
        </div>
    );
};

export default Cart;

/*
<div>
<div>배달주소</div>
<div>주소가 있어요</div>
<img src=""></img>
</div>
*/