import React from "react";
import Header from './components/Header';
import Post from './components/Post';     
import Bottom from './components/Bottom';  

const Home = () => {
    return (
        <div className="danggn">
            <Header />
            <Post />
            <Bottom />
        </div>
    );
};

export default Home;
