import OrderBar from "../../components/OrderBar/OrderBar";
import StatusBar from "../../components/StatusBar/StatusBar";
import Main from "./Main";

const Home = () => {
  return (
    <>
      <StatusBar cancel={false} back={false} />
      <Main />
      <OrderBar
        priceDesc="총"
        btnWidth="84px"
        btnHeight="38px"
        btnSize="lg"
        priceflexdirection="column"
      />
    </>
  );
};

export default Home;
