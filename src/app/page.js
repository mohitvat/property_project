"use client";

import Link from "next/link";
import "./homepage.css";
import Homenav from "./components/Homenav";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__wrapper">
        <Homenav />
        <Link href="/">
          <img
            className="navbar__logo"
            alt="Graystone white"
            src="https://c.animaapp.com/q5aj6oWM/img/graystone-white-1@2x.png"
          />
        </Link>
        <div className="homepage__content">
          {/* <img
          className="homepage__text"
          alt="Rosewood building"
          src="https://c.animaapp.com/q5aj6oWM/img/rosewood-building-luxury-1.png"
        /> */}
          <p>DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
        </div>

        <div className="social__logos">
          <a href="https://www.instagram.com/gspropertiesdevelopments/?hl=en">
            <img
              className="social__logo"
              alt="Ig white"
              src="https://c.animaapp.com/q5aj6oWM/img/ig-white@2x.png"
            />
          </a>
          <a href="https://www.tiktok.com/@gspropertiesdevelopments?_t=8i0xQIpJsjB&_r=1">
            <img
              className="social__logo"
              alt="Tiktokk white"
              src="/tiktok.png"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
