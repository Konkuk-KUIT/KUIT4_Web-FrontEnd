import OrderBar from "../../components/OrderBar/OrderBar";
import StatusBar from "../../components/StatusBar/StatusBar";
import Main from "./Main";

const Home = () => {
  return (
    <>
      <StatusBar cancel={false} back={false} />
      <Main />
      <OrderBar />
    </>
  );
};

export default Home;
