import React from 'react';
import OrderBar from '../../components/OrderBar/OrderBar';
import styles from './Home.module.css';

const menu = [
    { name: "피자", src: "" },
    { name: "샐러드", src: "" },
    { name: "햄버거", src: "" },
    { name: "한식", src: "" },
    { name: "분식", src: "" },
    { name: "치킨", src: "" },
    { name: "초밥", src: "" },
    { name: "샌드위치", src: "" },
    { name: "파스타", src: "" },
    { name: "디저트", src: "" },
    { name: "커피", src: "" },
    { name: "더보기", src: "" },
];

const Home = () => {

    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.header}>
                    <h1 className={styles.title}>오늘은 무엇을 먹을까요?</h1>
                    <p className={styles.address}>한남중앙로 40길 (한남 빌리지)(으)로 배달</p>
                </div>
                <div className={styles.menuContainer}>
                    {menu.map((category, index) => (
                        <div key={index} className={styles.categoryItem}>
                            <img className={styles.icon} />
                            <p className={styles.name}>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <OrderBar />
        </>
    );
};

export default Home;
