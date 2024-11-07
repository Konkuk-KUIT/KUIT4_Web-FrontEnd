import Button from "../Button";
import styles from './MenuItem.module.css';

const MenuItem = ({ menu }) => {
    const handleAddMenu = () => { };

    return (
        <div className={styles.menuItem}>
            <div className={styles.header}>
                <h3 className={styles.name}>
                    {menu.name}
                    {menu.isBest && <span className={styles.bestBadge}>인기</span>}
                </h3>
                <span className={styles.price}>
                    {menu.price.toLocaleString()}원
                </span>
            </div>
            <p className={styles.ingredients}>{menu.ingredients}</p>
            <div className={styles.buttonContainer}>
                <Button onClick={handleAddMenu} type="button" size="sm">
                    담기
                </Button>
            </div>
        </div>
    );
};

export default MenuItem;
