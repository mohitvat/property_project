import "./property.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

let images = [
  {url:"https://imgur.com/Irx8nfS.png",page:"/Project1"},
  {url:"https://imgur.com/XekvsZX.png",page:"/Project2"},
  {url:"https://imgur.com/dCMN8JH.png",page:"/Project3"},
  {url:"https://imgur.com/U11o1qR.png",page:"/Project4"},
];
const ProjectProperty = () => {
  return (
    <div>
      <div className="property__wrapper">
        <Navbar />
        {/* <div className="property__content">
          <p>DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
        </div> */}

        <div className="social__logos"><a href="https://www.instagram.com/gspropertiesdevelopments/?hl=en"><img className="social__logo" alt="Ig white" src="https://c.animaapp.com/q5aj6oWM/img/ig-white@2x.png"/></a><a href="https://www.tiktok.com/@gspropertiesdevelopments?_t=8i0xQIpJsjB&_r=1"><img className="social__logo" alt="Tiktokk white" src="/tiktok.png"/></a>
         


        </div>
      </div>
      <div className="property__text">
        <h3>Projects</h3>
        <br />
        <div className="image__grid">
          {images.map((image, index) => (
            <div key={index} className="image__element">
              <img src={image.url} alt={index} />
              <Link href={image.page}><div className="learn__more__btn">Learn More</div></Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProjectProperty;

