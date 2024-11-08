import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import "./about.css";
import peopleCooking from "../peoplecooking.png";

function About() {
  return (
    <div>
      <Navbar />
      <div className={"content"}>
        <div className={"firstContent"}>
          <div className={"leftFirstContent"}>
            <h1>nice to meet you.</h1>
            <p>
              Blabla blabla blabla, blabla blabla blabla. Blabla blabla blabla
              blabla blabla, blabla blabla blabla blabla blabla. Blabla blabla
              blabla blabla, blabla blabla blabla blabla. Blabla blabla blabla
              blabla, blabla blabla blabla. Blabla blabla blabla blabla blabla
              blabla blabla. Blabla blabla blabla blabla blabla, blabla blabla
              blabla. Blabla blabla blabla blabla, blabla blabla blabla blabla
              blabla. Blabla blabla blabla blabla blabla, blabla blabla blabla.
              Blabla blabla blabla blabla blabla blabla blabla. Blabla blabla
              blabla blabla blabla, blabla blabla blabla. Blabla blabla blabla
              blabla, blabla blabla blabla blabla blabla blabla.{" "}
            </p>
            <button className={"signupButton"}>Sign up for free</button>
          </div>
          <div className={"rightFirstContent"}>
            <img src={peopleCooking} />
          </div>
        </div>
        <div className={"secondContent"}>
          <div className={"leftSecondContent"}></div>
          <div className={"rightSecondContent"}></div>
        </div>
      </div>
    </div>
  );
}

export default About;
