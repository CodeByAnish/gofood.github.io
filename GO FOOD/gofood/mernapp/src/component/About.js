import React from "react";
import { Link } from "react-router-dom";
import aboutimag from '../component/about.png'
import { HiOutlineArrowRight } from "react-icons/hi";
import Navbar from "./Navbar";
import Team from "./Team";
import Footer from "./Footer";
import WhoAreWe from "./WhoAreWe";




const About = () => {
  return (
    <>
      <div> <Navbar /> </div>
      <section className="about " id="about" style={{ marginTop: '40px' }}>
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Gofood is a prominent food delivery platform based in India. Launched in 2024, Gofood has quickly become one of the leading players in the country's burgeoning food delivery industry. Here's an overview of Gofood:
              Mobile App and Website: gofood operates primarily through its mobile app, available for download on both Android and iOS platforms. Users can also place orders through the gofood website. The interface allows users to browse menus, place orders, track deliveries in real-time, and make payments seamlessly.
            </p>
            <Link to={"/menu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src={aboutimag} alt="about" />
          </div>
        </div>
      </section>
      <div>
        <Team />
        <WhoAreWe />
        <Footer />

      </div>
    </>
  );
};

export default About;
