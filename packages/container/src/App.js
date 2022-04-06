import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./component/MarketingApp";
import Header from "./component/Header";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
