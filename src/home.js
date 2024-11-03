import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/Login");
  };

  return (
    <div className="mainContainer">
      <div>
        <div>Welcome to </div>
        <div>R E C I P I</div>
      </div>
      <div>This is the home page.</div>
      <div>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"LOG IN"}
        />
      </div>
    </div>
  );
};

export default Home;
