import styles from "./ShowSelectedMenus.module.css";

const ShowSelectedMenus = () => {
  return (
    <div className={styles.container}>
      <img src="http://via.placeholder.com/54x54" className={styles.menuImg} />
      <div className={styles.menuInfo}>
        <h3 className={styles.menuName}>토마토 샐러드</h3>
        <span className={styles.menuComponents}>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</span>
        <span className={styles.menuPrice}>10,600원</span>
      </div>
      <div className={styles.menuCnt}>
        1개
      </div>
      <img src="../../../src/assets/arrowBackRight.svg" alt="arrowBackrightSVG" />
    </div>
  )
}

export default ShowSelectedMenus
