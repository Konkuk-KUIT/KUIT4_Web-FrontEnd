import styles from './Cart.module.css';
import CartMenuItem from '../../components/menuItem/CartMenuItem'
import { exclamation } from '../../assets';

const Cart = () => {
    return (
        <>
        <div className={styles.CartContainer}>
            <div className={styles.storeInfoContainer}>
                <h2 className={styles.storeName}>샐러리 한남점</h2>
                <div className={styles.alert}>
                    <div className={styles.alertContainer}>
                        <span className={styles.minOrderText}>최소금액 미달</span>
                        <img src={exclamation} alt="exclamation-mark" className={styles.exclamationMark} />
                    </div>
                </div>
                
            </div>

            <CartMenuItem />
            
            <div className={styles.addMoreContainer}>
                <button className={styles.addMoreButton}>더 담기 +</button>
            </div>
            
            <div className={styles.orderSummaryContainer}>
                <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>주문금액</span>
                    <span className={styles.summaryValue}>10,600원</span>
                </div>
                <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>배달요금</span>
                    <span className={styles.summaryValue}>2,000원</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                    <span className={styles.summaryLabel}>총 결제금액</span>
                    <span className={styles.summaryValue}>12,600원</span>
                </div>
                </div>
                <div className={styles.bottombar}>
                <span className={styles.totalPrice}>
                    최소주문금액 13,000원
                </span>
                <button className={styles.orderBtn}>
                    <span className={styles.orderBtnText}>
                    126,00원 결제하기
                    </span>
                </button>
            </div>
        </div>
        
        </>
    );
};

export default Cart