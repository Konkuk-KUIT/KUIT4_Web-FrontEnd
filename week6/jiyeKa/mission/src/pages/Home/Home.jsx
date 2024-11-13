import { Link } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";
import MainMenu from "../../components/MainMenu/MainMenu";
import MainMenuCategory from "../../components/MainMenuCategory/MainMenuCategory"; 
import HeaderBar from "../../components/HeaderBar/HeaderBar";

const Home = () => {
    return (
      <>
        <HeaderBar backTo={false} orderCancel={false}/>
        <MainMenu></MainMenu>
        <MainMenuCategory></MainMenuCategory>
        <OrderBar/>
          
      </>
    

    )
  };
  
  export default Home;
  