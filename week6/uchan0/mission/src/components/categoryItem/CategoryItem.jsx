import React from "react";
import styles from "./CategoryItem.module.css";

const CategoryItem = ({ item }) => {
  return (
    <div className={styles.categoryBox}>
      <img src={item.img} alt={item.category} className={styles.categoryIcon} />
      <p className={styles.categoryText}>{item.category}</p>
    </div>
  );
};

export default CategoryItem;
