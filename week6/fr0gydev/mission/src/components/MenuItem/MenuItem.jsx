import styles from "./MenuItem.module.css";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ menu }) => {
  const navigate = useNavigate();

  const handleAddMenu = () => {
    // TODO: 실제로는 여기서 장바구니에 메뉴를 추가하는 로직이 필요
    console.log("메뉴 추가:", menu.name);

    // 장바구니 페이지로 이동
    navigate("/cart");
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} />
      <div className={styles.info}>
        <h3 className={styles.name}>
          {menu.name}
          {menu.isBest && <span className={styles.bestBadge}>BEST</span>}
        </h3>
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
