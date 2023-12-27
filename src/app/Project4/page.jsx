
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
            <h2 className="project-details__title">2 Bed Apartment Harare, Zimbabwe</h2>
            <p className="project-details__description">
            Come and enjoy comfort in our recently renovated 2-bedroom Avondale flat. Situated in the peaceful residential suburb to the north and northwest of Harare, just 3.5km from the city centre, this cosy space is 5km away from the Museum of Human Sciences. With 24-hour security, a Smart TV, DSTV, high-speed WiFi, and complimentary parking, it's perfect for friends, couples, and both business and leisure travellers. Welcome to your tranquil 2-bedroom retreat!
            </p>
            <br />
            <p className="project-details__address">
              <span className="project-details__label">Address:</span><br /> Oxford Road, Harare Province, Zimbabwe<br /><br />
              {/* <span className="project-details__label">Type:</span><br /> Residential
              building <br /><br />
              <span className="project-details__label">
                Level of completion:
              </span><br />
              Rough construction <br /><br />
              <span className="project-details__label">Year:</span><br /> 2024 */}
            </p>
          </div>
          <img
            className="project-details__img1"
            src="https://imgur.com/oquvRNl.png"
            alt="Rectangle"
          />
        </div>
        <CarouselSlider projectFolder="Project4" length={29} />

        <div className="project-details__section">
          <img
            className="project-details__img1"
            src="https://imgur.com/bW5icIu.png"
            alt="Rectangle"
          />

          <div className="project-details__text">
            <h2 className="project-details__title">The Space:</h2>
            <br />
            <p className="project-details__common-areas">
            This spacious 2-bedroom apartment features generously sized bedrooms and a modern lounge equipped with amenities tailored for international travellers. The fully equipped kitchen ensures a hassle-free experience. Upon check-in, you'll find toiletries like bath soap, toilet roll, and cleaning supplies.

For larger groups, there's a comfortable sofa bed, accommodating 2 extra guests. We offer weekly cleaning and a linen change as standard, with additional cleaning available at an extra cost, payable directly to our cleaning staff.
            </p>
            {/* <br />
            <p className="project-details__staircase">
              <span className="project-details__label">Staircase:</span>{" "}
              Finished with first-quality granite tiles. <br /> 
              Glass railing according
              to architectural detail. <br /> Designer lighting according to
              architectural detail.
            </p> */}
            <Link href="/ContactUs">
              <div className="project-details__link">Contact us</div>
            </Link>
          </div>
        </div>

        <h2 className="project-details__title">Heating and Ventilation</h2>
        <br />
        <div className="project-details__section">
          <div style={{ flex: "1"}}>
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

          <div style={{ flex: "1"}}>
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
          src="https://imgur.com/ziVTTEz.png"
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
                When designing "Nishava Residence", a key priority was to
                provide residents with the advantage of natural day-night
                cycles. French windows flood all homes with daylight.
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

        <div className="project-details" style={{alignItems: "center"}}>
          <h2 className="project-details__title" style={{textAlign: "center"}}>More from Our Projects</h2>
          <br />
          <Link href="/Project1">
          <img
            className="project-details__rectangle"
            src="https://imgur.com/U11o1qR.png"
            alt="Rectangle"
            style={{width: "80vw", maxHeight: "50vh", objectFit: "cover"}}
          />
          </Link>
         
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ProjectPage;
