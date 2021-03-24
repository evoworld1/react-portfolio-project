import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
