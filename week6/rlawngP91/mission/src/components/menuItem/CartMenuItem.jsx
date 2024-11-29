import styles from './CartMenuItem.module.css'
import { menuDetail } from '../../assets';

const CartMenuItem = () => {
    return (
        <div className={styles.cartItemContainer}>
            <img src="/api/placeholder/54/54" alt="menu" className={styles.menuImage} />
                
                    <div className={styles.menuInfo}>
                        <h3 className={styles.menuName}>토마토 샐러드</h3>
                        <div className={styles.quantityContainer}>
                            <p className={styles.menuOptions}>추천소스, 채소볼, 베이컨추가, 시저드레싱</p>
                            <span className={styles.quantity}>1개</span>
                            <img src={menuDetail} alt="arrow" className={styles.menuDetailBtn} />
                        </div>
                        <span className={styles.itemPrice}>10,600원</span>
                    </div>
            </div>
    );
};

export default CartMenuItem;