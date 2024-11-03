import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import logoo from "./logo.png";
import { Link } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/Signup");
  };

  return (
    <div className="authenContainer">
      <div className={"authenImageContainer"}>
        <div className={"authenLogo"}>
          <Link to="/">
            <img src={logoo} />
          </Link>
        </div>
      </div>
      <div className={"authenFormContainer"}>
        <form>
          <label>Username:</label>
          <br />
          <input type="text" className="authenInput" />
          <br />
          <label>Password:</label>
          <br />
          <input type="text" className="authenInput" />
          <input className={"loginButton"} type="submit" value={"Log in"} />
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
    </div>
  );
};

export default Login;
