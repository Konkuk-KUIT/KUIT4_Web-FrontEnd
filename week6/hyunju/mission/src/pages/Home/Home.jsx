// import Button from 'src/components/Button/Button.jsx';
import styles from './Home.module.css';
import OrderBar from '../../components/OrderBar/OrderBar'


const Home = () => {
  const foodOptions = [
    { name: '피자', icon: '🍕' },
    { name: '샐러드', icon: '🥗' },
  
  ];
  
  return( 
    <>
        <div className={styles['food-menu-container']}>
            <h2 className={styles['title']}>오늘은 무엇을 먹을까요?</h2>
            <p className={styles['sub-title']}>한남중앙로 40길 (한남 빌리지)로 배달 &gt;</p>
            <div className={styles['grid-container']}>
                {foodOptions.map((item, index) => (
                    <div className={styles['grid-item']} key={index}>
                        <div className={styles['icon']} role="img" aria-label={item.name}>{item.icon}</div>
                        <span className={styles['item-name']}>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
        <OrderBar />
        </>
  );
};

export default Home;
