import Link from "next/link";
import "./about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const AboutUsPage = () => {
  return (
    <div>
      <div className="about__wrapper">
        <Navbar />
        {/* <div className="about__content">
          <p>DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
        </div> */}

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
      <div className="about__text">
        <p>
          Welcome to{" "}
          <span style={{ fontWeight: "bold" }}>
            Greystone Properties & Developments
          </span>
          , your trusted partner in exceptional accommodation and bespoke
          construction services across the United Kingdom, South Africa, and
          Zimbabwe.
          <br />
          {/* <br />
          We pride ourselves in designing the most unique homes that showcase
          traditional architecture, the finest craftsmanship utilising the
          highest quality materials, innovative technology, all meticulously
          finished to the highest standards.
          <br /> */}
          <br />
          <p>
            <span style={{ fontWeight: "bold" }}>Our Focus</span>
            <br />
            Discover a new standard of hospitality with Greystone Properties &
            Developments. Based in the heart of the UK, our commitment to
            excellence extends across the picturesque landscapes of South Africa
            and Zimbabwe. Immerse yourself in our carefully curated
            accommodations, where luxury meets comfort, offering a
            quintessentially British experience.
            <br />
            <br />
            <img className="w-2/3 mx-auto" alt="Ig white" src="/room1.jpg" />
            <br />
            <span style={{ fontWeight: "bold" }}>Accommodation Excellence</span>
            <br />
            At Greystone, we redefine the art of hospitality. Our portfolio
            boasts handpicked properties, each meticulously refurbished to
            reflect the epitome of British elegance. Whether you're seeking a
            countryside retreat, an urban oasis, or a coastal getaway, our
            accommodations are designed to elevate your stay to a truly
            memorable experience.
            <br />
            <br />
            <img className="w-2/3 mx-auto" alt="Ig white" src="/room3.jpg" />
            <br />
            <span style={{ fontWeight: "bold" }}>Construction Expertise</span>
            <br />
            Greystone Properties & Developments isn't just about accommodation;
            we are also at the forefront of bespoke construction services.
            Having left our mark on projects in Zimbabwe, we are excited to
            bring our construction expertise to the UK. From concept to
            completion, our team is dedicated to delivering outstanding
            craftsmanship and transforming spaces into timeless works of art.
            <br />
            <br />
            <img className="w-2/3 mx-auto" alt="Ig white" src="/room2.jpg" />
            <br />
            <span style={{ fontWeight: "bold" }}>Our Vision</span>
            <br />
            Greystone envisions a future where every property, whether it be for
            accommodation or construction, stands as a testament to British
            excellence. We strive to redefine the landscape, creating spaces
            that seamlessly blend innovation, tradition, and sustainability.
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Join Us on the Journey</span>
            <br />
            Whether you're a property owner looking for a trusted partner or a
            traveler in search of an unforgettable stay, Greystone Properties &
            Developments invites you to embark on this exciting journey with us.
            Explore our portfolio, experience the allure of our accommodations,
            and witness the transformative power of our construction services.
            <br />
          </p>
        </p>
        {/* <p>
          <span style={{ fontWeight: "bold" }}>Greystone </span> Luxury
          Developments create the finest bespoke homes across Buckinghamshire
          and The Home Counties.
        </p> */}
        <br />
        <br />
        <Link href="/ContactUs">
          <div className="contact__btn">Contact us</div>
        </Link>
      </div>
      {/* <div className="image__grid">
        <img
          className="image__element"
          alt="img"
          src="https://c.animaapp.com/iUpDz7wD/img/rectangle-2.png"
        />
        <img
          className="image__element"
          alt="img"
          src="https://c.animaapp.com/iUpDz7wD/img/rectangle-3.png"
        />
        <img
          className="image__element"
          alt="img"
          src="https://c.animaapp.com/iUpDz7wD/img/rectangle-4.png"
        />
      </div> */}

      <Footer />
    </div>
  );
};
export default AboutUsPage;
