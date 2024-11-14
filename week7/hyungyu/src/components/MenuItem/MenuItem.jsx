import useCartStore from "../../store/cartStore";
import Button from "../Button";
import styles from "./MenuItem.module.css";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const storeIs = useCartStore((state) => state.store);
  const menusFrom = useCartStore((state) => state.menusFrom);
  const setMenusFrom = useCartStore((state) => state.setMenusFrom);
  const resetStore = useCartStore((state) => state.resetStore);

  const handleAddMenu = () => {
    if(storeIs === menusFrom || !menusFrom){
      addMenu(menu);
      setMenusFrom(storeIs);
    }else{
      if(window.confirm("동일한 가게의 메뉴만 추가할 수 있습니다. 기존항목을 삭제하시겠습니까?")){
        resetStore();
        alert("삭제되었습니다.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.foodImg} src="http://via.placeholder.com/54x54" alt="foodImg"/>
      <div className={styles.foodInfo}>
        <span className={styles.menuName}>{menu.name}</span>
        <span className={styles.best}>{menu.isBest && "BEST"}</span>
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
