import React from "react";
import "./Navbar.css";
import Link from "next/link";
const Navbar2 = () => {
  return (
    <div className="navbar__wrapper">
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

export default Navbar2;

