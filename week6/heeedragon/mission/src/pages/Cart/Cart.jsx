import React from "react";
import Header from "../../components/Header";
import useCartStore from "./cartStore";
import styles from "./Cart.module.css";

const Cart = () => {
    const menus = useCartStore((state) => state.menus);
    const store = useCartStore((state) => state.store);
    const addMenu = useCartStore((state) => state.addMenu);

    const totalOrderAmount = menus.reduce((acc, menu) => acc + menu.price * menu.quantity, 0);

    const minimumOrderAmount = store?.minDeliveryPrice || 0;
    const deliveryFee = store?.deliveryFee || 0;

    return (
        <div>
            <Header />
            <div>
                <div>
                    <div>배달주소</div>
                    <div>주소가 있어요</div>
                    <img src=""></img>
                </div>

                <div>
                    <div>{store?.name}</div>
                    <div>
                        {totalOrderAmount > minimumOrderAmount ? (<></>) :
                            (
                                <div>
                                    <div>최소금액 미달</div>
                                    <img src="" alt="주문 불가" />
                                </div>
                            )}
                    </div>
                    <>

                        <div>
                            <div>
                            {menus.map((menu) => (
                                <div key={menu.id} className={styles.menuRow}>
                                    <div>
                                        <h3>{menu.name}</h3>
                                        <p>{menu.ingredients}</p>
                                        <p>{menu.price}원</p>
                                    </div>
                                    <div>
                                        <div>{menu.quantity}개</div>
                                    </div>
                                </div>
                            ))}
                            </div>

                            <div className={styles.summary}>
                                <div>주문금액</div><div>{totalOrderAmount}원</div>
                                <div>배달요금</div><div>{deliveryFee}원</div>
                                <div>
                                    총 결제금액</div><div>{(totalOrderAmount + deliveryFee)}원
                                </div>
                            </div>
                            <div>
                                최소 주문금액 {minimumOrderAmount}원
                            </div>
                        </div>
                    </>
                </div>

                <button disabled={totalOrderAmount < minimumOrderAmount}>
                    {totalOrderAmount}원 결제하기
                </button>
            </div>
        </div>
    );
};

export default Cart;


