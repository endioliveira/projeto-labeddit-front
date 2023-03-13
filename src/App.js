import React from "react";
import { Router } from "./Router/router"
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