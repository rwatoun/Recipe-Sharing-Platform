import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
//import Login from "./login";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
          // path="/login"
          // element={<Login} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
