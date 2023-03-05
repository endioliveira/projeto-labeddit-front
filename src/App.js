import React from "react";
import { Router } from "./Router/Router"
import { Global } from "./styles/GlobalStyled";

const App = () => {
  return (
    <>
      <Global />
      <Router />
    </>
  );
};


export default App;