import { Outlet } from "react-router-dom";
import styled from "styled-components";
import BottomBar from "../BottomBar";

const Layout = () => {
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
      {location.pathname !== "/cart" && <BottomBar />}
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
