import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Autoplay, Navigation } from "swiper";
import PortfolioData from "./PortfolioData";
import "swiper/swiper-bundle.css";

SwiperCore.use([EffectCoverflow, Autoplay, Navigation]);

const swiperSettings = {
  effect: "coverflow",
  speed: 1000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const PortfolioItems = () => {
  return (
    <Swiper {...swiperSettings}>
      {PortfolioData.map((data) => (
        <SwiperSlide>
          <span>{data.title}</span>
          <a href={data.link} target="_blank" rel="noreferrer">
            <img src={data.imageSrc} />
          </a>
        </SwiperSlide>
      ))}
      ;
    </Swiper>
  );
};

export default PortfolioItems;
