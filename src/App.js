import React from "react";
import { Router } from "./routes";
import { Global } from "./styles/GlobalStyled";

export const App = () => {
  return (
    <>
      <Global />
      <Router />
    </>
  );
};
