import { mount } from "dashboard/DashBoardApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current);
  }, []);
  //useeffect need to run when marketing app render for first time
  return <div ref={ref} />;
};
