import StatusBar from "../StatusBar/StatusBar";
import styles from "./Cart.module.css"
import Mark from "../../assets/mark.svg"
import MenuItem2 from "../../components/MenuItem/MenuItem2";

import OrderBar2 from "../../components/OrderBar/OrderBar2";
import useCartStore from "../../store/cartStore";


const Cart = () => {

  const store = useCartStore((state)=>state.store);
  
  const menus = useCartStore((state) => state.menus);
  console.log(menus);

  const groupedMenus = menus.reduce((acc, menu) => {
    const existingMenu = acc.find((item) => item.id === menu.id); // id를 기준으로 그룹화
    if (existingMenu) {
      existingMenu.quantity += 1; // 같은 메뉴가 있으면 수량 증가
    } else {
      acc.push({ ...menu, quantity: 1 }); // 처음 추가될 경우 수량을 1로 설정
    }
    return acc;
  }, []);
  console.log(groupedMenus);
  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0) + (store?.deliveryFee || 0);


  return (
    <>
      <StatusBar back={true} cancel={true} link={store ? `/store/${store.id}` : "/"}/>
      <div className={styles.orderContainer}>
        <div className={styles.orderMenu}>
          <div className={styles.orderStore}>
            <div className={styles.storeName}>{store?.name && `${store.name}`}</div>
            {totalPrice < (store?.minDeliveryPrice || 0) && (
              <div className={styles.minMon}>
                최소금액 미달 <img src={Mark} alt="Mark" />
              </div>
            )}
          </div>
          <div>
          {groupedMenus.map((menu)=>{
          return <MenuItem2 key={menus.id} menu={menu} quantity={menu.quantity}/>
          })}
          </div>
          <div className={styles.addCart}>
            더담기 +
          </div>
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.pay}>
          <div style={{color:"#8B95A1"}}>주문금액</div>
          <div>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</div>
        </div>
        <div className={styles.pay}>
          <div style={{color:"#8B95A1"}}>배달요금</div>
          <div>{store?.deliveryFee && store.deliveryFee}원</div>
        </div>
        <div className={styles.finalPayment}>
          <div>총 결제금액</div>
          <div>{totalPrice}원</div>
        </div>
      </div>

      <OrderBar2/>
    </>
  );
  
};

export default Cart;
