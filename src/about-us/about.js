import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import "./about.css";
import peopleCooking from "../peoplecooking.png";

function FirstContent() {
  return (
    <div className={"firstContent"}>
      <div className={"leftFirstContent"}>
        <p style={{ fontSize: "10px", color: "#666", margin: "5px 0" }}>
          {" "}
          ABOUT US
        </p>
        <h1>nice to meet you.</h1>
        <p>
          Blabla blabla blabla, blabla blabla blabla. Blabla blabla blabla
          blabla blabla, blabla blabla blabla blabla blabla. Blabla blabla
          blabla blabla, blabla blabla blabla blabla. Blabla blabla blabla
          blabla, blabla blabla blabla. Blabla blabla blabla blabla blabla
          blabla blabla. Blabla blabla blabla blabla blabla, blabla blabla
          blabla. Blabla blabla blabla blabla, blabla blabla blabla blabla
          blabla. Blabla blabla blabla blabla blabla, blabla blabla blabla.
          Blabla blabla blabla blabla blabla blabla blabla. Blabla blabla blabla
          blabla blabla, blabla blabla blabla. Blabla blabla blabla blabla,
          blabla blabla blabla blabla blabla blabla.{" "}
        </p>
        <button className={"signupButton"}>Sign up for free</button>
      </div>
      <div className={"rightFirstContent"}>
        <img src={peopleCooking} />
      </div>
    </div>
  );
}

function SecondContent() {
  return (
    <div className={"secondContent"}>
      <div className={"leftSecondContent"}></div>
      <div className={"rightSecondContent"}></div>
    </div>
  );
}

function About() {
  return (
    <div>
      <Navbar />
      <div className={"content"}>
        <FirstContent />
        <SecondContent />
      </div>
    </div>
  );
}

export default About;
