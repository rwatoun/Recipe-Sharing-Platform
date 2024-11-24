import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/navbar";
import "./about.css";
import Footer from "../Footer/footer";
import peopleCooking from "./people-cooking.png";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";

function FirstContent() {
  const navigate = useNavigate();
  const toSignup = () => {
    navigate("/Signup");
  };
  return (
    <div className={"firstContent"}>
      <div className={"leftFirstContent"}>
        <p style={{ fontSize: "10px", color: "#666", margin: "5px 0" }}>
          {" "}
          ABOUT US
        </p>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <h1>nice to meet you.</h1>
        </motion.div>
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
        <button onClick={toSignup} className={"signupButton"}>
          Sign up for free
        </button>
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
      <div className={"leftSecondContent"}>
        <h3>flavors from around the world</h3>
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
          blabla blabla blabla blabla blabla blabla.
        </p>
      </div>
      <div className={"rightSecondContent"}>
        <p style={{ alignSelf: "flex-start" }}>
          Blabla blabla blabla, blabla blabla blabla. Blabla blabla blabla
          blabla blabla, blabla blabla blabla blabla blabla. Blabla blabla
          blabla blabla, blabla blabla blabla blabla. Blabla blabla blabla
          blabla, blabla blabla blabla.
        </p>
        <p style={{ alignSelf: "flex-start" }}>
          Blabla blabla blabla, blabla blabla blabla. Blabla blabla blabla
          blabla blabla, blabla blabla blabla blabla blabla. Blabla blabla
          blabla blabla, blabla blabla blabla blabla. Blabla blabla blabla
          blabla, blabla blabla blabla.
        </p>
        <p style={{ alignSelf: "flex-start" }}>
          Blabla blabla blabla, blabla blabla blabla. Blabla blabla blabla
          blabla blabla, blabla blabla blabla blabla blabla. Blabla blabla
          blabla blabla, blabla blabla blabla blabla. Blabla blabla blabla
          blabla, blabla blabla blabla.
        </p>
      </div>
    </div>
  );
}

function ThirdContent() {
  return <div className={"thirdContent"}></div>;
}

function FourthContent() {
  const [displayContent, setDisplayContent] = useState({
    text: "Text for Button 1",
    image: image1,
  });

  const [selectedButton, setSelectedButton] = useState(1);

  // Content for each button
  const contentMap = {
    1: { name: "Recipe 1", text: "Text for Button 1", image: image1 },
    2: { name: "Recipe 2", text: "Text for Button 2", image: image2 },
    3: { name: "Recipe 3", text: "Text for Button 3", image: image3 },
    4: { name: "Recipe 4", text: "Text for Button 4", image: image4 },
  };

  // Function to handle button clicks and set the content
  const handleButtonClick = (buttonId) => {
    setDisplayContent(contentMap[buttonId]);
    setSelectedButton(buttonId); // Update the selected button ID
  };

  return (
    <div className={"fourthContent"}>
      <div className={"topFourthContent"}>
        <p style={{ fontSize: "3rem", fontWeight: "bold" }}>
          The story of Recipi
        </p>
        <p style={{ alignSelf: "flex-start" }}>
          Blabla blabla blabla, blabla blabla blabla. Blabla blabla blabla
          blabla blabla, blabla blabla blabla blabla blabla. Blabla blabla
          blabla blabla, blabla blabla blabla blabla. Blabla blabla blabla
          blabla, blabla blabla blabla.
        </p>
      </div>
      <div className={"bottomFourthContent"}>
        <div className={"leftBottomFourthContent"}>
          {Object.keys(contentMap).map((id) => (
            <button
              key={id}
              className={`buttonFourthContent ${
                selectedButton === parseInt(id) ? "selected" : ""
              }`}
              onClick={() => handleButtonClick(parseInt(id))}
            >
              {contentMap[id].name}
            </button>
          ))}
        </div>
        <div className={"rightBottomFourthContent"}>
          <div className={"imgRightBottomFourthContent"}>
            <img src={displayContent.image} />
          </div>
          <div className={"textRightBottomContent"}>
            <p>{displayContent.text}</p>
          </div>
        </div>
      </div>
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
        <ThirdContent />
        <FourthContent />
      </div>
      <Footer />
    </div>
  );
}

export default About;
