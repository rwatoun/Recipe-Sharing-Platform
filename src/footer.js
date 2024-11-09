import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className={"footerContent"}>
      <div className={"topFooterContent"}>
        <div className={"leftTopFooterContent"}>
          <p>Company</p>
          <Link>Link 1</Link>
          <br />
          <Link>Link 2</Link>
          <br />
          <Link>Link 3</Link>
          <br />
          <Link>Link 4</Link>
          <br />
          <Link>Link 5</Link>
        </div>
        <div className={"centerTopFooterContent"}>
          <p>Resources</p>
          <Link>Link 1</Link>
          <br />
          <Link>Link 2</Link>
          <br />
          <Link>Link 3</Link>
          <br />
          <Link>Link 4</Link>
          <br />
          <Link>Link 5</Link>
        </div>
        <div className={"rightTopFooterContent "}>
          <p>Solutions</p>
          <Link>Link 1</Link>
          <br />
          <Link>Link 2</Link>
          <br />
          <Link>Link 3</Link>
          <br />
          <Link>Link 4</Link>
          <br />
          <Link>Link 5</Link>
        </div>
      </div>
      <div className={"bottomFooterContent"}></div>
    </footer>
  );
}

export default Footer;
