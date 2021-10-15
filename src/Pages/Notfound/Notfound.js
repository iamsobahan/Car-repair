import React from "react";
import { useHistory } from "react-router";
import logo from "../../images/four.png";

const Notfound = () => {
  const history = useHistory();
  const clickhandler = () => [history.push("/home")];
  return (
    <div>
      <img src={logo} alt="" />
      <button onClick={clickhandler}>go back</button>
    </div>
  );
};

export default Notfound;
