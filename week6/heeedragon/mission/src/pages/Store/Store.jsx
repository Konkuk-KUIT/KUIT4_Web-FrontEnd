import { useParams } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";
import styles from "./Store.module.css";
import Header from "../../components/Header";

const Store = () => {
    const { storeId } = useParams();
    const store = stores.find((store) => store.id.toString() === storeId);

    if (!store) {
        return <div>가게를 찾을 수 없어요 🥺</div>;
    }

    return (
        <div>
            <Header />
            <div className={styles.storeInfo}>
                <div className={styles.storeName}>{store.name}</div>
                <div className={styles.comment}>
                    <img src="../../public/yellowStar.svg" className={styles.starIcon}></img>
                    <div className={styles.score}>4.9</div>
                    <div className={styles.review}>리뷰3,919</div>
                </div>

                <div className={styles.storeDetail}>
                    <div className={styles.storeDetailRow}>
                        <div>결제방법</div>
                        <div>토스결제만 현장결제 안됨</div>
                    </div>
                    <div className={styles.storeDetailRow}>
                        <div>최소주문</div>
                        <div>13,000원</div>
                    </div>
                    <div className={styles.storeDetailRow}>
                        <div>배달시간</div>
                        <div>약 15-25분</div>
                    </div>
                </div>
            </div>
            <div className={styles.category}>
            샐러드
            </div>
            <div>
                {store.menus.map((menu) => {
                    return (
                            <MenuItem key={menu.id} menu={menu}/>
                    );
                })}
                <OrderBar />
            </div>
        </div>
    );
};

export default Store;
