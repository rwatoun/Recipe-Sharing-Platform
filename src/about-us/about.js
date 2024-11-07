import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import "./about.css";

function About() {
  return (
    <div>
      <Navbar />
      <div className={"content"}>
        <div className={"firstContent"}>
          <div className={"leftFirstContent"}></div>
          <div className={"rightFirstContent"}></div>
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
