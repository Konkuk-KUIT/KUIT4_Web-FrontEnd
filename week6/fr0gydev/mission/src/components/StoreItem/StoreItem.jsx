import styles from "./StoreItem.module.css";

const StoreItem = ({ store, onClick }) => {
  const { id, name, rating, reviewCount, deliveryTime, deliveryFee } = store;

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.imageContainer} />
      <div className={styles.info}>
        {id <= 3 && <div className={styles.rank}>{id}위</div>}
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.rating}>
          <span className={styles.stars}>★ {rating}</span>
          <span className={styles.reviewCount}>
            ({reviewCount.toLocaleString()})
          </span>
        </div>
        <div className={styles.delivery}>
          {deliveryTime} · 배달비 {deliveryFee.toLocaleString()}원
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
