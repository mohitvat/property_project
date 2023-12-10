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

        <div className="social__logos"><a href="https://www.instagram.com/gspropertiesdevelopments/?hl=en"><img className="social__logo" alt="Ig white" src="https://c.animaapp.com/q5aj6oWM/img/ig-white@2x.png"/></a><a href="https://www.tiktok.com/@gspropertiesdevelopments?_t=8i0xQIpJsjB&_r=1"><img className="social__logo" alt="Tiktokk white" src="/tiktok.png"/></a>
         


        </div>
      </div>
      <div className="about__text">
        <p>
          <span style={{ fontWeight: "bold" }}>Greystone</span> Luxury
          Developments is a privately owned, luxury residential developer,
          specialising in building the finest bespoke properties set within
          stunning rural locations in the commuter belt countryside.
          <br />
          <br />
          We pride ourselves in designing the most unique homes that showcase
          traditional architecture, the finest craftsmanship utilising the
          highest quality materials, innovative technology, all meticulously
          finished to the highest standards.
          <br />
          <br />
          <p>
            <span style={{ fontWeight: "bold" }}>Greyston</span> Bespoke
            undertakes bespoke private client projects, from drawing and
            planning stages, right the way through to choosing the brassware in
            your bathroom. Rosewood Bespoke is our expert turn key service for
            delivering you your dream home.
            <br />
            <br />
            Whether you’d like to discuss one of our projects, enquire about our
            bespoke service or assistance in finding land to build on, we would
            be delighted to hear from you.
            <br />
          </p>
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Greyston</span> Luxury
          Developments create the finest bespoke homes across Buckinghamshire
          and The Home Counties.
        </p>
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
