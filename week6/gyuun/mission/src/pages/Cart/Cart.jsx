import OrderBar from "../../components/OrderBar/OrderBar";
import styles from "./Cart.module.css";
import stores from "../../models/stores";
const Cart = ({header_bar}) => {
  const GrayBox = () =>{
    return <div className={styles.grayBox}></div>
  }
  const WhiteBox = () =>{
    return <div className={styles.whiteBox}></div>
  }
  const Saladaccount = () => {


    return<div className={styles.saladaccount}>
            <div className={styles.storename}>{stores[0].name}</div>
            <div className={styles.saladbox}></div>

            <div className={styles.storebottom}>
              <div className={styles.saladname}>{stores[0].menus[0].name}</div>
              <div className={styles.ingredient}>{stores[0].menus[0].ingredients}</div>
              <div className={styles.account}>{stores[0].menus[0].price}</div>
            </div>
    </div>
  }
  const SaladPlus = () =>{
    return <div className={styles.plusA}>
      <div className={styles.blueplus}>더 담기+</div>
    </div>
  }
  const AsignCount = ()=>{
    return <div className={styles.asigncount}>
      <div className={styles.asignaccount}>
        <div className={styles.asignfont}>주문금액</div>
        <div className={styles.asignfont}>10,600원</div>
      </div>
      <div className={styles.asignaccount}>
        <div className={styles.asignfont}>배달요금</div>
        <div className={styles.asignfont}>2,000원</div>
      </div>
      <div className={styles.asignaccount}>
        <div className={styles.asignfont}>총 결제금액</div>
        <div className={styles.asignfont}>12,600원</div>
      </div>
    </div>
  }
  return <div>
    {header_bar(true)}
    <div className={styles.cartbox}>
      <GrayBox/>
      <Saladaccount/>
      <SaladPlus/>
      <GrayBox/>
      <WhiteBox/>
      <AsignCount/>
    </div>
    <OrderBar/>
  </div>;
};

export default Cart;
