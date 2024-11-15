import Button from "../Button";
import styles from "./OrderBar.module.css";
import BottomBar from "../../assets/BottomBar.svg"
import useCartStore from "../../store/cartStore";

const OrderBar2 = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state)=>state.store);
  const handleOrder = () => {};

  return (
    <div className={styles.bottomContainer2}>
      <div className={styles.bottomContain2}>
        <div className={styles.minMon}>최소 주문 금액 {store?.minDeliveryPrice && store.minDeliveryPrice}원</div>
        <div>
            <Button type="button" size="xl" disabled={ (menus.reduce((acc, cur) => acc + cur.price, 0) + (store?.deliveryFee || 0)) < (store?.minDeliveryPrice || 0)}>
            {menus.reduce((acc, cur) => acc + cur.price, 0)+(store?.deliveryFee && store.deliveryFee)}원
            </Button>
        </div>
      
    </div>
    <div className={styles.bottomBar}>
      <div><img src={BottomBar}/></div>
    </div>
    </div>
    
  );
};

export default OrderBar2;
