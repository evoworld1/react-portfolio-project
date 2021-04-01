import React, { useEffect } from "react";
import "./Portfolio.css";
import PortfolioItems from "./PortfolioItems";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className="portfolio-container">
      <div className="portfolio-h1" data-aos="fade-up" data-aos-delay="200">
        <h1>my projects</h1>
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <p>click on images to see the source code</p>
      </div>
      <div data-aos="fade-in" data-aos-delay="400">
        <PortfolioItems />
      </div>
    </div>
  );
};

export default Portfolio;
