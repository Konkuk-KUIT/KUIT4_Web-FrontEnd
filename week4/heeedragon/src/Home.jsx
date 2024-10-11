import React from "react";
import marketModel from "./models/MarketModel";
import Header from "./components/Header";
import Post from "./components/Post";
import Bottom from "./components/Bottom";

const Home = () => {
    const { items, location } = marketModel;

    return (
        <div id="danggn">
            <Header location={location} />
            <Post items={items} />
            <Bottom />
        </div>
    );
};

export default Home;
