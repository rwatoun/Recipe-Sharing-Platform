import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logoo from "./logo.png";
import { Link } from "react-router-dom";

function LeftContainer() {
  return (
    <div className={"authenImageContainer"}>
      <div className={"authenLogo"}>
        <Link to="/">
          <img src={logoo} />
        </Link>
      </div>
    </div>
  );
}

function RightContainer() {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/Signup");
  };
  return (
    <div className={"authenFormContainer"}>
      <form>
        <label>Username:</label>
        <br />
        <input type="text" className="authenInput" />
        <br />
        <label>Password:</label>
        <br />
        <input type="text" className="authenInput" />
        <input type="submit" value={"Log in"} className={"loginButton"} />
      </form>
      <br />
      <br />
      <br />
      <br />
      <div> Not a member? </div>
      <div>
        <input
          className={"loginButton"}
          type="button"
          onClick={onButtonClick}
          value={"Sign up"}
        />
      </div>
    </div>
  );
}

const Login = (props) => {
  return (
    <div className="authenContainer">
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default Login;
