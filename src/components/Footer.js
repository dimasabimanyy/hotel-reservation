import React from "react";
import footerLogo from "../images/logo_dark.svg";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-info container">
        <div className="footer-logo">
          <img src={footerLogo} alt="logo" />
        </div>
        <div className="address">
          <h6>ADDRESS</h6>
          <p>736 Blue Spring Ave. Smithtown, NY 11787</p>
        </div>
        <div className="phone">
          <h6>PHONE</h6>
          <p>(+844) 1800 3377</p>
        </div>
        <div className="reservations">
          <h6>RESERVATIONS</h6>
          <p>(+844) 1800 3355 support@example.com</p>
        </div>
        <div className="social-footer">
          <h6>FOLLOW US</h6>
          <i className="fa fa-github"></i>
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
