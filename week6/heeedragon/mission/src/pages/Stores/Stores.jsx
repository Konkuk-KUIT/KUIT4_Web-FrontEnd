import React from 'react';
import Header from '../../components/Header';
import styles from "./Stores.module.css";
import OrderBar from '../../components/OrderBar/OrderBar';

const storeList = [
    {
        rank: "1위",
        name: "샐로리 한남점"
    },
    {
        rank: "2위",
        name: "옐로우푸드 샐러드"
    },
    {
        rank: "3위",
        name: "씬더볼드 한남점"
    },
    {
        name: "파스토보이"
    },
    {
        name: "힘난다 샐러드"
    },
    {
        name: "드가자"
    },
];

const Stores = () => {
    return (
        <div>
            <Header />
            <div className={styles.storeList}>
                <div className={styles.storeCategory}>샐러드</div>
            </div>

            <div className={styles.storesContainer}>
                {storeList.map((category, index) => (
                    <div key={index} className={styles.store}>
                        <img className={styles.storeImage} />
                        <div className={styles.storeContent}>
                            <div className={styles.storeRank}>{category.rank}</div>
                            <div className={styles.storeName}>{category.name}</div>
                            <div className={styles.storeDetail}>
                                <div>★ 4.9 (3,919)</div>
                                <div>13분~30분 ∙ 배달비 2,000원</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <OrderBar />
        </div>
    )
};

export default Stores;