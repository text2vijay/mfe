import React from "react";
import ReactDom from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

//Mount function to start up the app
const mount = (e1, { onSignIn, onNavigate, defaultHistrory, initialPath }) => {
  const history =
    defaultHistrory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) history.listen(onNavigate);

  ReactDom.render(<App onSignIn={onSignIn} history={history} />, e1);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      console.log("container just navigated");
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

//if we are in dev mode and in isolation
//call mount immediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistrory: createBrowserHistory() });
  }
}

// we are running though to contaner
//and we should export the mount function
export { mount };
