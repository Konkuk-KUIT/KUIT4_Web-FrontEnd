import React from "react";
import styles from "./Home.module.css";
import pizzaIcon from "../../assets/foodCategory/pizzaIcon.png";
import OrderBar from "../../components/OrderBar/OrderBar";
import CategoryItem from "../../components/categoryItem/CategoryItem";

const foodCategory = [
  {
    img: pizzaIcon,
    category: "피자",
  },
  {
    img: pizzaIcon,
    category: "샐러드",
  },
  {
    img: pizzaIcon,
    category: "햄버거",
  },
  {
    img: pizzaIcon,
    category: "한식",
  },
  {
    img: pizzaIcon,
    category: "분식",
  },
  {
    img: pizzaIcon,
    category: "치킨",
  },
  {
    img: pizzaIcon,
    category: "초밥",
  },
  {
    img: pizzaIcon,
    category: "샌드위치",
  },
  {
    img: pizzaIcon,
    category: "파스타",
  },
  {
    img: pizzaIcon,
    category: "디저트",
  },
  {
    img: pizzaIcon,
    category: "커피",
  },
  {
    img: pizzaIcon,
    category: "더보기",
  },
];

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.makeMargin}></div>
      <div className={styles.headContainer}>
        <div className={styles.wanttoeat}>오늘은 무엇을 먹을까요?</div>
        {/* &gt; 는 > 를 텍스트로 쓰기위해 사용 */}
        <div className={styles.mylocation}>
          한남중앙로 40길 (한남빌리지)(으)로 배달 &gt;
        </div>
      </div>
      <div className={styles.categorySets}>
        {foodCategory.map((item, index) => (
          // <div className={styles.categoryBox} key={index}>
          //   <img
          //     src={item.img}
          //     alt={item.category}
          //     className={styles.categoryIcon}
          //   />
          //   <p className={styles.categoryText}>{item.category}</p>
          // </div>
          <CategoryItem item={item} key={index} />
        ))}
      </div>
      <OrderBar />
    </div>
  );
};

export default Home;
