import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Signup from "./Signup";
import About from "./about-us/about";
import RecipePage from "./RecipePage";
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
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
