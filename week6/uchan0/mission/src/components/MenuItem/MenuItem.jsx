import useCartStore from "../../store/cartStore";
import Button from "../Button";
import styles from "./MenuItem.module.css";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <div className={styles.menuItemContainer}>
      <div className={styles.menuItemImg}></div>
      <div className={styles.menuItemInfoContainer}>
        <div className={styles.menuItemName}>{menu.name}</div>
        <span className={styles.menuItemPrice}>
          {menu.price.toLocaleString()}원
        </span>
        <div className={styles.menuItemIngredients}>{menu.ingredients}</div>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
