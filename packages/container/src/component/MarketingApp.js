import { mount } from "marketing/MarketingApp";

import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        console.log("the container noticed navigation in marketing", nextPathname);
        const { pathname } = history.location;
        if (pathname !== nextPathname) history.push(nextPathname);
      },
    });

    history.listen(onParentNavigate);
  }, []);
  //useeffect need to run when marketing app render for first time.
  return <div ref={ref} />;
};
