import { useNavigate } from "react-router-dom";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import styles from "./Home.module.css";
import pizzaIcon from "../../assets/피자.png";
import saladIcon from "../../assets/샐러드.png";
import burgerIcon from "../../assets/햄버거.png";
import koreanIcon from "../../assets/한식.png";
import snackIcon from "../../assets/분식.png";
import chickenIcon from "../../assets/치킨.png";
import sushiIcon from "../../assets/초밥.png";
import sandwichIcon from "../../assets/샌드위치.png";
import pastaIcon from "../../assets/파스타.png";
import dessertIcon from "../../assets/디저트.png";
import coffeeIcon from "../../assets/커피.png";
import moreIcon from "../../assets/더보기.png";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "피자", image: pizzaIcon },
    { id: 2, name: "샐러드", image: saladIcon },
    { id: 3, name: "햄버거", image: burgerIcon },
    { id: 4, name: "한식", image: koreanIcon },
    { id: 5, name: "분식", image: snackIcon },
    { id: 6, name: "치킨", image: chickenIcon },
    { id: 7, name: "초밥", image: sushiIcon },
    { id: 8, name: "샌드위치", image: sandwichIcon },
    { id: 9, name: "파스타", image: pastaIcon },
    { id: 10, name: "디저트", image: dessertIcon },
    { id: 11, name: "커피", image: coffeeIcon },
    { id: 12, name: "더보기", image: moreIcon, small: true },
  ];

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "샐러드") {
      navigate("/stores");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>오늘은 무엇을 먹을까요?</h1>
        <p className={styles.subtitle}>
          한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;
        </p>
        <div className={styles.gridContainer}>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              image={category.image}
              name={category.name}
              onClick={() => handleCategoryClick(category.name)}
              small={category.small}
            />
          ))}
        </div>
      </div>
      <OrderBar menus={[]} store={null} />
    </>
  );
};

export default Home;
