import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/home";
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Sign-In/Sign-in";
import About from "./Containers/About/about";
import Contact from "./Containers/Contact/contact";
import RecipePage from "./Containers/Recipe/RecipePage";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
