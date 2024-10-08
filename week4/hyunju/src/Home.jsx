import React from "react";
import BottomNav from './components/BottomNav.jsx'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'

// week4\hyunju\src\components\assest  <<이미지에 적용시켜보기 alt에!!


const Home = () => {
  const product = [
    {
        imgSrc: "img1.svg",    
        descHeader: "에어팟프로",
        descWhere:"군자동",
        descWhen:"3일전",
        dsecCost:"220,000원",
        isSold: false
    },
    {
        imgSrc: "img2.svg",    
        descHeader: "바이레도 블랑쉬 50ml",
        descWhere:"광진구 구의제3동",
        descWhen:"26초 전",
        dsecCost:"4,000원",
        isSold: true
    },
    {
        imgSrc: "img1.svg",    
        descHeader: "샌드위치",
        descWhere:"동대문구 휘경동",
        descWhen:"끌올 59초전",
        dsecCost:"8,000원",
        isSold: false
    },
    {
        imgSrc: "img1.svg",    
        descHeader: "아이폰 13프로맥스",
        descWhere:"군자동",
        descWhen:"1일전",
        dsecCost:"100,000,000원",
        isSold: true
    },
    {
        imgSrc: "img1.svg",    
        descHeader: "커피머신",
        descWhere:"교문1동",
        descWhen:"1초전",
        dsecCost:"100,000원",
        isSold: true
    },
    {
        imgSrc: "img1.svg",    
        descHeader: "커피머신",
        descWhere:"교문1동",
        descWhen:"1초전",
        dsecCost:"100,000원",
        isSold: true
    },
    {
        imgSrc: "img1.svg",    
        descHeader: "커피머신",
        descWhere:"교문1동",
        descWhen:"1초전",
        dsecCost:"100,000원",
        isSold: true
    },
    {
        imgSrc: "img1.svg",    
        descHeader: "커피머신",
        descWhere:"교문1동",
        descWhen:"1초전",
        dsecCost:"100,000원",
        isSold: true
    }
]
  return (
  <div>
    <BottomNav />
    <Header />
    <Content products={product} />
  </div>
  );
};

export default Home;
