import styles from "./MenuItem.module.css";
import useCartStore from "../../stores/useCartStore";

const MenuItem = ({ menu, storeId }) => {
  const { addMenu, store, clearCart, menus } = useCartStore();

  const handleAddMenu = () => {
    // 장바구니가 비어있거나 첫 주문인 경우
    if (menus.length === 0) {
      addMenu(menu);
      return;
    }

    // 현재 담긴 메뉴의 가게와 새로 담으려는 메뉴의 가게가 다른 경우
    if (store && store.id.toString() !== storeId.toString()) {
      if (
        window.confirm(
          "이전에 담은 메뉴가 있습니다. 다른 가게의 메뉴를 담을 경우 이전 메뉴가 삭제됩니다. 계속하시겠습니까?"
        )
      ) {
        clearCart();
        addMenu(menu);
      }
      return;
    }

    // 같은 가게의 메뉴인 경우
    addMenu(menu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} />
      <div className={styles.info}>
        <h2 className={styles.name}>
          {menu.name}
          {menu.isBest && <span className={styles.bestBadge}>BEST</span>}
        </h2>
        <p className={styles.price}>{menu.price.toLocaleString()}원</p>
        <p className={styles.ingredients}>{menu.ingredients}</p>
      </div>
      <button onClick={handleAddMenu} className={styles.addButton}>
        담기
      </button>
    </div>
  );
};

export default MenuItem;
