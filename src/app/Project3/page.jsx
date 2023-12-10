import "./project.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import CarouselSlider from "../components/CarouselSlider";

const ProjectPage = () => {
  return (
    <div>
      <div className="project__wrapper">
        <Navbar />
        {/* <div className="project__content">
          <p>DEVELOPMENTS | INTERIORS | BESPOKE PROJECTS</p>
        </div> */}

        <div className="social__logos">
          <img
            className="social__logo"
            alt="Ig white"
            src="https://c.animaapp.com/q5aj6oWM/img/ig-white@2x.png"
          />
          <img className="social__logo" alt="Tiktokk white" src="/tiktok.png"/>

        </div>
      </div>

      <div className="project-details">
        <div className="project-details__section">
          <div className="project-details__text">
            <h2 className="project-details__title">1 Bed Townhouse in Harare,Zimbabwe</h2>
            <p className="project-details__description">
            This stunning apartment is situated in the historical suburbs of Arcadia, Harare nearby Hillside and St Martins. This apartment has a lot to offer such as luxurious Smart TV, DSTV, unlimited high-speed WiFi and free parking at the property. This apartment has a lovely homely feel to it and it is well furnished. It is suitable for friends, partners and for business and leisure travellers to unwind.
            </p>
            <br />
            <p className="project-details__address">
              <span className="project-details__label">Address:</span>
              <br /> Harare, Harare Province, Zimbabwe<br />
              {/* <br />
              <span className="project-details__label">Type:</span>
              <br /> Residential building <br />
              <br />
              <span className="project-details__label">
                Level of completion:
              </span>
              <br />
              Rough construction <br />
              <br />
              <span className="project-details__label">Year:</span>
              <br /> 2024 */}
            </p>
          </div>
          <img
            className="project-details__img1"
            src="https://imgur.com/MWt0OSw.png"
            alt="Rectangle"
          />
        </div>
        <CarouselSlider projectFolder="Project3" length={6} />

        <div className="project-details__section">
          <img
            className="project-details__img1"
            src="https://imgur.com/kP15c9I.png"
            alt="Rectangle"
          />

          <div className="project-details__text">
            <h2 className="project-details__title">The Space</h2>
            <br />
            <p className="project-details__common-areas">
              {/* <span className="project-details__label">Common areas:</span>{" "} */}
              The apartment has spacious bedrooms and lounge with modern finishes and amenities for the international travellers. The kitchen is fully equipped. Toiletries (bath soap, toilet roll, cleaning chemicals) are provided at check-in and guests will replace when they run out. Weekly cleaning and change of linen is standard. Additional cleaning requirements will be charged extra and paid directly to the cleaning staff.
The apartment has a backup water tank fitted with a booster pump is installed to provide uninterrupted water supply.
            </p>
            <br />
            <p className="project-details__staircase">
              <span className="project-details__label">Other things to note:</span>{" "}
              Smoking inside the apartment is prohibited. Should you want to smoke, you can use the garden. However, please dispose of cigarette buts in a responsible manner
            </p>
            <Link href="/ContactUs">
              <div className="project-details__link">Contact us</div>
            </Link>
          </div>
        </div>

        <h2 className="project-details__title">Heating and Ventilation</h2>
        <br />
        <div className="project-details__section">
          <div style={{ flex: "1" }}>
            <div>
              <img
                className="project-details__logo"
                src="heating.png"
                alt="Image"
              />

              <p>
                The heating in the building is centrally provided by
                Toplofikatsiya AD. All rooms in all apartments are equipped with
                underfloor heating, ensuring comfort, cleanliness, and
                spaciousness.
              </p>
            </div>
            <br />
            <div>
              <img
                className="project-details__logo"
                src="fan.png"
                alt="Image"
              />
              <p>Air conditioning ducts are provided in all rooms.</p>
            </div>
            <Link href="/ContactUs">
              <div className="project-details__link">Contact us</div>
            </Link>
          </div>

          <div style={{ flex: "1" }}>
            <img
              className="project-details__logo"
              src="air.png"
              alt="Image"
            />

            <p>
              The ventilation system includes heat recovery units. The
              high-quality air flow is ensured by the latest generation of
              energy-efficient MVHR systems. In each room, the purified air with
              HEPA (PM2.5) level circulates while providing heating and cooling.
              With these systems, 93% of the heat is retained in the building,
              significantly reducing utility bills by several thousand lev per
              year.
            </p>
          </div>
        </div>

        <img
          className="project-details__cover__img"
          src="https://imgur.com/dCMN8JH.png"
          alt="Rectangle"
        />

        <h2 className="project-details__title">Advantages and Comfort</h2>
        <br />
        <div className="project-details__section">
          <div className="project-details__description">
            <img
              className="project-details__logo"
              src="day-and-night.png"
              alt="Image"
            />

            <p>
              When designing "Nishava Residence", a key priority was to provide
              residents with the advantage of natural day-night cycles. French
              windows flood all homes with daylight.
            </p>
            <Link href="/ContactUs">
              <div className="project-details__link">Contact us</div>
            </Link>
          </div>
          <div className="project-details__description">
            <img
              className="project-details__logo"
              src="sound-waves (1).png"
              alt="Image"
            />

            <p>
              Few people realize that sound is one of the biggest sources of
              stress in the city. External noises are minimized thanks to
              high-quality double-glazed windows and a ventilated facade.
            </p>
          </div>
        </div>

        <div className="project-details" style={{ alignItems: "center" }}>
          <h2
            className="project-details__title"
            style={{ textAlign: "center" }}
          >
            More from Our Projects
          </h2>
          <br />
          <Link href="/Project4">
            <img
              className="project-details__rectangle"
              src="https://imgur.com/LaJaiKx.png"
              alt="Rectangle"
              style={{ width: "80vw", maxHeight: "50vh", objectFit: "cover" }}
            />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ProjectPage;
