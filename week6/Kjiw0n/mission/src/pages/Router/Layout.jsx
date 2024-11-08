import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import BottomBar from "../BottomBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StatusBar from "/src/assets/StatusBar.svg";

const Layout = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <header>
        <StatusBar style={{ width: "390px", height: "47px" }} />
      </header>
      <Outlet />
      {location.pathname !== "/cart" && <OrderBar />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  position: relative;
`;

export default Layout;
