import StatusBar from '../../components/StatusBar/StatusBar';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import HomeTitle from '../../components/HomeTitle/HomeTitle';
import HomeGrid from '../../components/HomeGrid/HomeGrid';
import OrderBar from '../../components/OrderBar/OrderBar';

const Home = () => {
  return (
    <>
      <StatusBar />
      <HeaderBar/>
      <HomeTitle />
      <HomeGrid />
      <OrderBar />
    </>
  );
};
export default Home;