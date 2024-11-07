import Button from "../Button";
import styles from './MenuItem.module.css';

import { menuImgIcon } from "../../assets";

const MenuItem = ({ menu }) => {
    const handleAddMenu = () => { };

    return (
        <div className={styles.menuItem}>
            <img src={menuImgIcon} className={styles.menuImg} alt="menuImg" />
            <div className={styles.content}>
            <div className={styles.header}>
            <div className={styles.titleContainer}>
                <h3 className={styles.name}>
                    {menu.name}
                    {menu.isBest && <span className={styles.bestBadge}>인기</span>}
                    </h3>
                    </div>
                <span className={styles.price}>
                    {menu.price.toLocaleString()}원
                </span>
            </div>
            <div className={styles.body}>
                <p className={styles.ingredients}>{menu.ingredients}</p>
            
            <div className={styles.buttonContainer}>
                <Button onClick={handleAddMenu} type="button" size="sm">
                    담기
                </Button>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default MenuItem;
