import React from "react";
import "./reset.css";
import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <section className="item-list">
        <Content />
      </section>
      <nav>
        <BottomNav />
      </nav>
    </div>
  );
};

export default Home;