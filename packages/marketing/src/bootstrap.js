import React from "react";
import ReactDom from "react-dom";

import App from "./App";

//Mount function to start up the app
const mount = (e1) => {
  ReactDom.render(<App />, e1);
};

//if we are in dev mode and in isolation
//call mount immediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// we are running though to contaner
//and we should export the mount function
export { mount };
