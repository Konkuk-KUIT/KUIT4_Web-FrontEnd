import Button from "../Button";
import styles from "./OrderBar.module.css";
import BottomBar from "../../assets/BottomBar.svg"

const OrderBar2 = () => {
  const menus = [];
  const store = null;
  const handleOrder = () => {};

  return (
    <div className={styles.bottomContainer2}>
      <div className={styles.bottomContain2}>
        <div className={styles.minMon}>최소 주문금액 13,000원</div>
        <div>
            <Button type="button" size="xl" disabled={true}>
                12,600원 결제하기
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
