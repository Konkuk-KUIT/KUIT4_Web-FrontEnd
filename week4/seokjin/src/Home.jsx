import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

const Home = () => {
  const posts = [
    {
        image: "./assets/airpot.svg",
        title: "에어팟프로",
        location: "군자동",
        date: "3일전",
        price: "220,000원",
        comments: 3,
        hearts: 11,
        isSold: true,
    },
    {
        image: "./assets/blansh.svg",
        title: "바이레도 블랑쉬 50ml",
        location: "광진구 구의 제 3동",
        date: "26초전",
        price: "4,000원",
        comments: 0,
        hearts: 2,
        isSold: false,
    },
    {
        image: "./assets/sandwich.svg",
        title: "샌드위치",
        location: "동대문구 휘경동",
        date: "끌올 59초전",
        price: "8,000원",
        comments: 0,
        hearts: 0,
        isSold: false,
    },
    {
        image: "./assets/iphone.svg",
        title: "아이폰 13프로맥스",
        location: "군자동",
        date: "1일전",
        price: "1,000,000원",
        comments: 0,
        hearts: 0,
        isSold: true,
    },
    {
        image: "./assets/airpot.svg",
        title: "에어팟프로(실착 1회)",
        location: "화양동",
        date: "2일전",
        price: "200,000원",
        comments: 0,
        hearts: 0,
        isSold: true,
    },
  ];
  return (
    <div className="contents">
        <Header />
        <Content posts={posts} />
        <BottomNav />
    </div>
  );
};

export default Home;
