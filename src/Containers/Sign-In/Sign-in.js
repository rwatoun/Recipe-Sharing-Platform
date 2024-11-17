import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Sign-in.css";
import logoo from "../../Components/Logo/logo.png";

const Signup = (props) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/Signup");
  };

  return (
    <div className="signupContainer">
      <div className={"signupImageContainer"}>
        <div className={"signupLogo"}>
          <Link to="/">
            <img src={logoo} />
          </Link>
        </div>
      </div>
      <div className={"signupFormContainer"}>
        <form>
          <div>Sign up to Recipi</div>
          <br />
          <div>
            Recipi is a recipe sharing platform that allows you to share your
            recipes and discover new ones.{" "}
          </div>
          <br />
          <label>Please enter your email address</label>
          <br />
          <input type="text" className="signupInput" />
          <br />
          <label>Please enter a password</label>
          <br />
          <input type="text" className="signupInput" />
          <br />
          <label>Please confirm your password</label>
          <br />
          <input type="text" className="signupInput" />
          <input className={"loginButton"} type="submit" value={"Sign up"} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
