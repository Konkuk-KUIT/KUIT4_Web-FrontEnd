import React from "react";
import Header from "./components/Header";
import Content from "./components/Contents";
import BottomBtn from "./components/BottomBtn";
import BottomNav from "./components/BottomNav";

import './styles.css';

import marketModel from './models/MarketModel'; // marketModel import

const Home = () => {
    const { location, items } = marketModel;

    return (
        <div className="component">
            <Header location={location} />
            <Content items={items} />
            <BottomBtn />
            <BottomNav />
        </div>
    );
};

export default Home;
