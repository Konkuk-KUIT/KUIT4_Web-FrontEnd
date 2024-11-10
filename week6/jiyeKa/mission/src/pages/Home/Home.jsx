import { Link } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";
import MainMenu from "../../components/MainMenu/MainMenu";
import MainMenuCategory from "../../components/MainMenuCategory/MainMenuCategory"; 

const Home = () => {
    return (
      <>

        <MainMenu></MainMenu>
        <MainMenuCategory></MainMenuCategory>
        <OrderBar/>
      </>
    

    )
  };
  
  export default Home;
  