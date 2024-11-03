import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import logo from "./logo-back.jpeg";

const Login = (props) => {
  const onButtonClick = () => {
    // You'll update this function later
  };

  return (
    <div className="authenContainer">
      <div className={"authenImageContainer"}></div>
      <div className={"authenFormContainer"}>
        <div>
          <div className="authenLogo">
            <img src={logo} />
          </div>
        </div>
        <form>
          <label>USERNAME:</label>
          <br />
          <input type="text" className="authenInput" />
          <br />
          <label>PASSWORD:</label>
          <br />
          <input type="text" className="authenInput" />
          <input className={"loginButton"} type="submit" value={"LOG IN"} />
        </form>
        <br />
        <br />
        <br />
        <br />
        <div> NOT A MEMBER? </div>
        <div>
          <input
            className={"loginButton"}
            type="button"
            onClick={onButtonClick}
            value={"SIGN IN!"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
