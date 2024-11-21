import GridCategory from "../../components/GridCategory/GridCategory";
import HomeIndicator from "../../components/HomeIndicator/HomeIndicator";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import OrderBar from "../../components/OrderBar/OrderBar";
import Top from "../../components/Top/Top";

const Home = () => {
  return (
    <>
    <Top />
    <HomeTitle />
    <div style={{
          height: '552px',
          paddingTop: '70px',
          paddingBottom: '156px',
          boxSizing: 'border-box'
        }}>
      <GridCategory />
    </div>
    <OrderBar/>
    <HomeIndicator />
    </>
  );
};

export default Home;
