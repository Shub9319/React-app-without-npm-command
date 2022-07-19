import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Home/Hompage";
import About from "./About/About";

import "./App.css";
import Header from "./Header/Header";

export default function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}
