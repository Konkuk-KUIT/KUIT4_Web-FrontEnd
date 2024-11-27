import { useNavigate } from "react-router-dom";
import styles from "./Stores.module.css";
import StoreItem from "../../components/StoreItem/StoreItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import TopBar from "../../components/TopBar/TopBar";

const Stores = () => {
  const navigate = useNavigate();

  const stores = [
    {
      id: 1,
      name: "샐로리 한남점",
      rating: 4.9,
      reviewCount: 3919,
      deliveryTime: "13분~30분",
      deliveryFee: 2000,
    },
    {
      id: 2,
      name: "옐로우푸드 샐러드",
      rating: 4.8,
      reviewCount: 1129,
      deliveryTime: "13분~30분",
      deliveryFee: 2000,
    },
    {
      id: 3,
      name: "씬더볼드 한남점",
      rating: 4.8,
      reviewCount: 919,
      deliveryTime: "13분~30분",
      deliveryFee: 2000,
    },
    {
      id: 4,
      name: "THE 샐러드가득담은",
      rating: 5.0,
      reviewCount: 27,
      deliveryTime: "13분~30분",
      deliveryFee: 2000,
    },
    {
      id: 5,
      name: "파스토보이",
      rating: 4.8,
      reviewCount: 801,
      deliveryTime: "13분~30분",
      deliveryFee: 2000,
    },
    {
      id: 6,
      name: "힘난다 샐러드",
      rating: 4.8,
      reviewCount: 801,
      deliveryTime: "13분~30분",
      deliveryFee: 2000,
    },
    {
      id: 7,
      name: "서브웨이",
      rating: 4.8,
      reviewCount: 801,
      deliveryTime: "13분~30분",
      deliveryFee: 2000,
    },
    {
      id: 8,
      name: "회원님 그만 먹어요",
      rating: 4.8,
      reviewCount: 801,
      deliveryTime: "13분~30분",
      deliveryFee: 2000,
    },
  ];

  const handleStoreClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  return (
    <>
      <div className={styles.container}>
        <TopBar />
        <h1 className={styles.title}>샐러드</h1>
        <div className={styles.storeList}>
          {stores.map((store) => (
            <StoreItem
              key={store.id}
              store={store}
              onClick={() => handleStoreClick(store.id)}
            />
          ))}
        </div>
      </div>
      <OrderBar menus={[]} store={null} />
    </>
  );
};

export default Stores;
