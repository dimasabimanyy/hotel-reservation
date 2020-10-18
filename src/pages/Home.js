import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import FeaturedSpecial from "../components/FeaturedSpecial";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Welcome from "../components/Welcome";
import HomeTitle from "../images/home-title.png";
import Testimonials from "../components/Testimonials";
import Aos from 'aos';
import 'aos/dist/aos.css'

export const Home = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title={<img src={HomeTitle} alt="Summer Vacations" />}
          subTitle="Memories that will last forever"
          aosType="fade-in"
          aosDuration="1000"
          aosDelay="1200"
          aosOnce="true"
        >
          <Link to="/rooms" className="btn-primary to-room" data-aos="fade-in" data-aos-duration="1000"  data-aos-delay="1200" data-aos-offset="-200">
            View Our Rooms <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </Banner>
      </Hero>
      <Welcome />
      <FeaturedSpecial />
      <FeaturedRooms />
      <Services />
      <Testimonials />
      <Experience />
    </React.Fragment>
  );
};
