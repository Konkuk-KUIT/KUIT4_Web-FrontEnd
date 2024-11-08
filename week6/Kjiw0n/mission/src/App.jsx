import Router from "./pages/Router";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
