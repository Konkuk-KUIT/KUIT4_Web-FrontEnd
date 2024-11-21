import styled from "styled-components";
import styles from './Home.module.css'
import burger from '../../assets/burger.svg'
import OrderBar from "../../components/OrderBar/OrderBar";
import { Link } from 'react-router-dom'
import StatusBar from "../StatusBar/StatusBar";


const foodCategory = [
  {
    img: burger,
    category: "피자",
  },
  {
    img: burger,
    category: "샐러드",
  },
  {
    img: burger,
    category: "햄버거",
  },
  {
    img: burger,
    category: "한식",
  },
  {
    img: burger,
    category: "분식",
  },
  {
    img: burger,
    category: "치킨",
  },
  {
    img: burger,
    category: "초밥",
  },
  {
    img: burger,
    category: "샌드위치",
  },
  {
    img: burger,
    category: "파스타",
  },
  {
    img: burger,
    category: "디저트",
  },
  {
    img: burger,
    category: "커피",
  },
  {
    img: burger,
    category: "더보기",
  },
];

const Home = () => {
  return (
    <>
    <StatusBar back={false} cancel={false}/>
    <div className={styles.Home}>
      <div className={styles.TitleContainer}>
        <div className={styles.Text1}>오늘은 무엇을 먹을까요?</div>
        <div className={styles.Text2}>
          한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;
        </div>
      </div>
      <div className={styles.categoryItems}>
        {foodCategory.map((item)=>(
          <Link to="/stores" key={item.category}>
            <div className={styles.categoryItem}>
            <div className={styles.categoryItem}>
              <img src={burger} alt={item.category}/>
              <div className={styles.categoryName}>{item.category}</div>
              </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
    
    <OrderBar/>  
    </>
  );
};

export default Home;
