import useCartStore from "../../store/cartStore";
import Button from "../Button";
import styles from "./MenuItem.module.css";

const MenuItem = ({ newStore, menu }) => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const setStore = useCartStore((state) => state.setStore);
  const addMenu = useCartStore((state) => state.addMenu);
  const reset = useCartStore((state) => state.resetAll);
  const updateMenuCount = useCartStore((state) => state.updateMenuCount);

  // useEffect(() => {
  //   if (store) {
  //     setStore(store);
  //   }
  // }, []);

  // 메뉴를 담으려고 할 때 전역 상태 변경
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
      // setStore(newStore);
      // addMenu(menu);
      const isMenuExists = menus.some(
        (existingMenu) => existingMenu.id === menu.id
      );

      if (!isMenuExists) {
        // 메뉴가 존재하지 않을 때만 추가
        setStore(newStore);
        addMenu(menu);
        menu.cnt += 1;
      } else {
        updateMenuCount(menu.id);
      }
    }
  };

  return (
    <div className={styles.menuItemContainer}>
      <div className={styles.menuItemImg}></div>
      <div className={styles.menuItemInfoContainer}>
        <div className={styles.menuBestContainer}>
          <div className={styles.menuItemName}>{menu.name}</div>
          {menu.isBest && <div className={styles.isBest}>BEST</div>}
        </div>
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
