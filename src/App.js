import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/aboutMe/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="Header">
        <Header />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
