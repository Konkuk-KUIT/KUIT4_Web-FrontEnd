import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import plus from "./assets/plus.svg";

// 상품 데이터를 한 곳에서 관리 (props를 적절히 이용해 데이터 import는 한 번만 이루어지도록 구현)
const products = [
  {
    id: 1,
    name: "에어팟 프로",
    image: "airpodspro.svg",
    location: "군자동",
    timestamp: "3일 전",
    price: 220000,
    chatCount: 3,
    likeCount: 11,
    isSold: true,
  },
  {
    id: 2,
    name: "바이레도 블랑쉬 50ml",
    image: "바이레도.svg",
    location: "광진구 구의제3동",
    timestamp: "26초 전",
    price: 4000,
    chatCount: 0,
    likeCount: 2,
    isSold: false,
  },
  {
    id: 3,
    name: "샌드위치",
    image: "샌드위치.svg",
    location: "동대문구 휘경동",
    timestamp: "끌올 59초 전",
    price: 8000,
    chatCount: 0,
    likeCount: 0,
    isSold: true,
  },
  {
    id: 4,
    name: "아이폰 13프로맥스",
    image: "iphone13promax.svg",
    location: "군자동",
    timestamp: "1일 전",
    price: 1000000,
    chatCount: 0,
    likeCount: 0,
    isSold: false,
  },
  {
    id: 5,
    name: "닌텐도 스위치",
    image: "nintendo.svg",
    location: "구리시 교문1동",
    timestamp: "1초 전",
    price: 120000,
    chatCount: 1,
    likeCount: 15,
    isSold: true,
  },
];

const Home = () => {
  // 조건부 렌더링 사용 (isSold : true 만 렌더링)
  const soldProducts = products.filter((product) => product.isSold);

  return (
    <div>
      <Header />
      {/* props를 통해 필터링된 데이터 전달 */}
      <Content products={soldProducts} />
      <BottomNav />
      <button className="floating-button">
        <img src={plus} alt="글쓰기 버튼" />
      </button>
    </div>
  );
};

export default Home;
