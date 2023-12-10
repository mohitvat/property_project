// CarouselSlider.js
"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const CarouselSlider = ({ projectFolder, length }) => {
  const images = Array.from({ length: length }, (_, index) => index + 1); // Assuming there are 5 images
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize(); // Set initial slidesPerView

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="carousel__div">
      <h2 className="carousel__title">PROPERTY IMAGES</h2>

      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((index) => (
          <SwiperSlide key={index}>
            <img
              src={`/image/${projectFolder}/img (${index}).jpg`}
              alt={`Image ${index}`}
              style={{ width: "100%", height: "50vh", objectFit: "cover" ,"borderRadius": "10px"}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Carousel
        autoPlay={true}
        swipeable={true}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        useKeyboardArrows={true}
        infiniteLoop={true}
        className="project-details__carousel"
      >
        {images.map((index) => (
          <div key={index}>
            <img
              src={`/image/${projectFolder}/img (${index}).jpg`}
              alt={`Image ${index}`}
              style={{ width: "100%", maxHeight: "50vh", objectFit: "contain" }}
            />
          </div>
        ))}
      </Carousel> */}
    </div>
  );
};

export default CarouselSlider;
