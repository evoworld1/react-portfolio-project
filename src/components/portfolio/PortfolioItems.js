import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Autoplay, Navigation } from "swiper";
import PortfolioData from "./PortfolioData";
import "swiper/swiper-bundle.css";

SwiperCore.use([EffectCoverflow, Autoplay, Navigation]);

const swiperSettings = {
  effect: "coverflow",
  direction: "vertical",
  speed: 1000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
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
  breakpoints: {
    800: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 10,
        depth: 300,
      },
      direction: "horizontal",
      centeredSlides: true,
    },
  },
};

const PortfolioItems = () => {
  return (
    <Swiper {...swiperSettings}>
      {PortfolioData.map((data) => (
        <SwiperSlide>
          <div className="swiper-image">
            <span>{data.title}</span>
            <a href={data.link} target="_blank" rel="noreferrer">
              <img src={data.imageSrc} />
            </a>
          </div>
        </SwiperSlide>
      ))}
      ;
    </Swiper>
  );
};

export default PortfolioItems;
