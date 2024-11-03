import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "./firebase.js";
import { addDoc, collection } from "@firebase/firestore";
import "./home.css";

const Home = (props) => {
  const navigate = useNavigate();
  const ref = collection(firestore, "messages");

  const onButtonClick = () => {
    navigate("/Login");
  };

  const messageRef = useRef();

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    // save data
    let data = {
      message: messageRef.current.value,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
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
      <form onSubmit={handleSave}>
        <label>Enter message</label>
        <input type="text" ref={messageRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Home;
