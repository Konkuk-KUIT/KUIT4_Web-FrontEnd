import React from "react";
import ImageCollection from "./ImageCollection";
import Header from "./components/Header";
import Content from "./components/Content";
import PlusButton from "./components/PlustButton";
import BottomNav from "./components/BottomNav";
import "./styles.css";
import "./reset.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <PlusButton />
      <BottomNav />
    </div>
  );
};

export default Home;
