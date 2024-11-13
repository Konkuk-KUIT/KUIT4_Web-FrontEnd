import useCartStore from "../../store/cartStore";
import Button from "../Button";
import styles from "./MenuItem.module.css";

const MenuItem = ({ newStore, menu }) => {
  const store = useCartStore((state) => state.store);
  const setStore = useCartStore((state) => state.setStore);
  const addMenu = useCartStore((state) => state.addMenu);
  const reset = useCartStore((state) => state.resetAll);

  // useEffect(() => {
  //   if (store) {
  //     setStore(store);
  //   }
  // }, []);

  const handleAddMenu = () => {
    if (store && store != newStore) {
      if (
        window.confirm(
          "장바구니는 동일 가게의 메뉴만 추가할 수 있습니다. 장바구니를 초기화하시겠습니까?"
        )
      ) {
        reset(); // 확인을 누른 경우 reset 실행
      }
    } else {
      setStore(newStore);
      addMenu(menu);
    }
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
