import Button from "../Button";
import styles from "./OrderBar.module.css";
import BottomBar from "../../assets/BottomBar.svg"
import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";


const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = null;
  const handleOrder = () => {};

  return (
    <div className={styles.bottomContainer}>
      <div className={styles.bottomContain}>
      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"5px"
      }}>
        <div className={styles.total}>총 주문금액</div>
        <div className={styles.totalAmount}>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</div>
      </div>
      <div style={{
        paddingTop: "3px",
      }}>
        <Link to="/cart">
        <Button onClick={handleOrder} type="button" size="lg">
        {store?.name && `${store.name}에서 `}주문하기
        </Button>
        </Link>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div><img src={BottomBar}/></div>
    </div>
    </div>
    
  );
};

export default OrderBar;
