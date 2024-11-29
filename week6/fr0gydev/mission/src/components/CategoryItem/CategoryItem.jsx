import styles from "./CategoryItem.module.css";

const CategoryItem = ({ image, name, onClick, small }) => {
  return (
    <div className={styles.itemContainer} onClick={onClick}>
      <div className={styles.iconWrapper}>
        <img
          src={image}
          alt={name}
          className={`${styles.categoryIcon} ${small ? styles.small : ""}`}
        />
      </div>
      <span className={styles.categoryName}>{name}</span>
    </div>
  );
};

export default CategoryItem;
