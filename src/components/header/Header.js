import React from "react";
import "./Header.css";
import Particles from "react-particles-js";
import Typed from "react-typed";

function Header() {
  return (
    <div className="header-wrapper">
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 3,
                color: "#e66f00",
              },
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />

      <div className="main-info">
        <p>Hi, I'm</p>
        <h1>paweł</h1>
        <Typed
          className="typed-text-animation"
          strings={["Self-taught", "Web Developer"]}
          typeSpeed={60}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
}

export default Header;
