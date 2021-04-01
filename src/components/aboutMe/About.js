import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutPhoto from "../../assets/aboutPhoto.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className="about-container">
      <div
        className="about-section-one"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img className="about-photo" src={aboutPhoto}></img>
        <div className="about-h1">
          <span className="change-text-color">ab</span>
          <span>out me</span>
        </div>
      </div>
      <div
        className="about-section-two"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <p>
          Donec ut lacus consequat, aliquet dolor eget, venenatis tortor.
          Quisque dictum accumsan commodo. Donec faucibus ligula lectus, sed
          porta nibh egestas ac. Praesent fermentum posuere diam convallis
          lacinia. Mauris congue est non felis maximus, sit amet eleifend dolor
          accumsan. Morbi sagittis bibendum vulputate. Vestibulum in condimentum
          diam, nec euismod enim. Praesent at sodales magna, non eleifend velit.
        </p>
      </div>
    </div>
  );
};

export default About;
