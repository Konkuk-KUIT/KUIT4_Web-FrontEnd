import Button from "../Button";
import styles from "./MenuItem.module.css";

const MenuItem = ({ menu }) => {
  const handleAddMenu = () => {};

  return (
    <div className={styles.container}>
      <img className={styles.foodImg} src="http://via.placeholder.com/54x54" alt="foodImg"/>
      <div className={styles.foodInfo}>
        <h3 className={styles.menuName}>{menu.name}</h3>
        <p className={styles.menuPrice}>{menu.price}원</p>
        <p className={styles.menuIngredients}>{menu.ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
