import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "./logo.png";
import googleIcon from "./googleicon.png";
import facebookIcon from "./facebookicon.png";
import { Link } from "react-router-dom";

function LeftLoginCard() {
  return (
    <div className={"leftLoginCard"}>
      <button className={"loginButton"}>
        <img src={googleIcon} className={"icon"} />
        Continue with Google
      </button>
      <button className={"loginButton"}>
        <img src={facebookIcon} className={"icon"} />
        Continue with Facebook
      </button>
      <Link to="/Signup" className={"redirectionsLogin"}>
        Sign up with email
      </Link>
    </div>
  );
}

function RightLoginCard() {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/Signup");
  };

  return (
    <div className={"rightLoginCard"}>
      <form>
        <div style={{ textAlign: "left" }}>
          <label>Email</label>
          <input type="text" className="authenInput" />
        </div>
        <br />
        <div style={{ textAlign: "left" }}>
          <label>Password</label>
          <input type="text" className="authenInput" />
        </div>
        <br />
        <div style={{ textAlign: "left" }}>
          <Link to="/" className={"redirectionsLogin"}>
            Forgot password?
          </Link>
        </div>
        <br />
        <input type="submit" value={"Log in"} className={"loginButton"} />
      </form>
    </div>
  );
}

function LoginCard() {
  return (
    <div className={"backgroundLogin"}>
      <div className={"loginCard"}>
        <div className={"loginLogo"}>
          <Link to="/">
            <img src={logo} />
          </Link>
          <br />
          <h3>Discovering flavors from around the world</h3>
        </div>
        <div className={"bottomLogin"}>
          <LeftLoginCard />
          <RightLoginCard />
        </div>
        <br />
        <MoreInfo />
      </div>
    </div>
  );
}

function MoreInfo() {
  return (
    <div className={"moreInfo"}>
      <div>
        <Link to="" className={"redirectionsLogin"}>
          {" "}
          About{" "}
        </Link>
        ⋆
        <Link to="" className={"redirectionsLogin"}>
          {" "}
          Privacy{" "}
        </Link>
        ⋆
        <Link to="" className={"redirectionsLogin"}>
          {" "}
          Contact{" "}
        </Link>
        ⋆
        <Link to="" className={"redirectionsLogin"}>
          {" "}
          Recipi, Inc, 2024
        </Link>
      </div>
    </div>
  );
}

const Login = (props) => {
  return (
    <div className="authenContainer">
      <LoginCard />
    </div>
  );
};

export default Login;
