import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import BottomBar from "../BottomBar";
import OrderBar from "../../components/OrderBar/OrderBar";

const Layout = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <header>
        <img
          src="StatusBar.svg"
          alt="statusBar image"
          style={{ width: "390px", height: "47px" }}
        />
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
