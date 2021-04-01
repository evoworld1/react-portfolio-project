import React from "react";
import "./Header.css";
import Particles from "react-particles-js";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 40,
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

      <Particles
        className="particlesMobile"
        params={{
          particles: {
            number: {
              value: 15,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#e66f00",
              },
            },
            size: {
              value: 2,
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
          strings={["Self-taught Web Developer"]}
          typeSpeed={60}
        />
      </div>
    </div>
  );
};

export default Header;
