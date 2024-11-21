import { useEffect } from "react";
import Router from "./pages/Router";
import { Normalize } from "styled-normalize";
import {getStore} from "./apis/stores";

const App = () => {

  useEffect(() => {
    getStore(1).then((value) => console.log(value));
  }, [])

  return (
    <>
      <Normalize />
      <Router />
    </>
  );
};

export default App;
