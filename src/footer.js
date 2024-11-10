import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import insta from "./insta.png";
import linkedin from "./linkedin.png";
import youtube from "./youtube.png";
import logo from "./logo.png";

function Footer() {
  return (
    <footer className={"footerContent"}>
      <div className={"topFooterContent"}>
        <div className={"leftTopFooterContent"}>
          <Link to="/">
            <img className={"logo"} src={logo} />
          </Link>
        </div>
        <div className={"centerTopFooterContent"}>
          <p>Company</p>
          <Link className={"text"}>Link 1</Link>
          <br />
          <Link className={"text"}> Link 2</Link>
          <br />
          <Link className={"text"}>Link 3</Link>
          <br />
          <Link className={"text"}>Link 4</Link>
        </div>
        <div className={"rightTopFooterContent "}>
          <p>Resources</p>
          <Link className={"text"}>Link 1</Link>
          <br />
          <Link className={"text"}>Link 2</Link>
          <br />
          <Link className={"text"}>Link 3</Link>
          <br />
          <Link className={"text"}>Link 4</Link>
        </div>
      </div>
      <div className={"bottomFooterContent"}>
        <div className={"leftBottomFooterContent"}>
          <Link className={"text"}>Copyright @ 2024 Recipi</Link>
        </div>
        <div className={"centerBottomFooterContent"}>
          <Link className={"text"}>Privacy Policy</Link>|
          <Link className={"text"}>Legal Stuff</Link>|
          <Link className={"text"}>Accessibility</Link>
        </div>
        <div className={"rightBottomFooterContent"}>
          <a>
            <img className={"directionIcon"} src={insta} />
          </a>
          <a>
            <img className={"directionIcon"} src={youtube} />
          </a>
          <a>
            <img className={"directionIcon"} src={linkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
