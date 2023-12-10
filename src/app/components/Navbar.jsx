import React from "react";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <Link href="/">
      <img
        className="navbar__logo"
        alt="Graystone white"
        src="https://c.animaapp.com/q5aj6oWM/img/graystone-white-1@2x.png"
      />
      </Link>
     
      <div className="navbar__buttons">
        <Link href="/AboutUs">
          <div className="nav__btn">About Us</div>
        </Link>
        <Link href="/ContactUs">
          <div className="nav__btn">Contact Us</div>
        </Link>
        <Link href="/Property">
          <div className="nav__btn">Property</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

