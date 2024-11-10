import StatusBar from "../StatusBar/StatusBar";
import styles from "./Cart.module.css"

import Mark from "../../assets/mark.svg"
import MenuItem2 from "../../components/MenuItem/MenuItem2";
import stores from "../../models/stores";

const Cart = () => {
  return (
    <>
      <StatusBar back={true} cancel={true} link={"/"}/>
      <div className={styles.orderContainer}>
        <div className={styles.orderMenu}>
          <div className={styles.orderStore}>
            <div className={styles.storeName}>샐로리 한남점</div>
            <div className={styles.minMon}>최소금액 미달 <img src={Mark}/> </div>
          </div>
          <div>
            <MenuItem2 menu={stores[0].menus[0]}/>
          </div>
          <div className={styles.addCart}>
            더담기 +
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Cart;
