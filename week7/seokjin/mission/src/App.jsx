import Router from "./pages/Router";
import { Normalize } from "styled-normalize";

const App = () => {
  return (
    <div style={{ width: "390px", margin: "0 auto" }}>
      <Normalize />
      <Router />
    </div>
  );
};

export default App;
