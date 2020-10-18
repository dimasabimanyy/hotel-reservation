import React, { useEffect } from "react";
import footerLogo from "../images/logo_dark.svg";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'

function Footer() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <footer>
      <div className="footer-info footer-container">
        <div className="footer-logo" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false" data-aos-delay="0">
          <Link to="/">
            <img src={footerLogo} alt="logo" />
          </Link>
        </div>

        <div className="address"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="false" data-aos-delay="200">
          <h6>ADDRESS</h6>
          <p>736 Blue Spring Ave. Smithtown, NY 11787</p>
        </div>
        <div className="phone" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false" data-aos-delay="400">
          <h6>PHONE</h6>
          <p>(+844) 1800 3377</p>
        </div>
        <div className="reservations" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false" data-aos-delay="600">
          <h6>RESERVATIONS</h6>
          <p>(+844) 1800 3355 support@example.com</p>
        </div>
        <div className="social-footer" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false" data-aos-delay="800">
          <h6>FOLLOW US</h6>
          <div className="icons-wrap">
            <a href="https://instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://facebook.com">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://youtube.com">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-slash"></div>
      <div className="copyright container">
        <p>Copyright &copy; Dimas Abimanyu 2020. All Right Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
