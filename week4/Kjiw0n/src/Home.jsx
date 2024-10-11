import "./styles/index.css";
import marketModel from "./models/MarketModel";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import BottomNav from "./components/BottomNav";

const Home = () => {
    const { location, items } = marketModel;
    return (
        <div>
            <Header location={location} />
            <Content items={items} />
            <BottomNav />
        </div>
    );
};

export default Home;
