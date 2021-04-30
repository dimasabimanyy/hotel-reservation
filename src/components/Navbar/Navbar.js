import React, { Component } from "react";
import logo from "../../images/logo_light.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    Aos.init();
  }

  state = {
    active: false,
  };

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <nav>
        <div className="logo-responsive" data-aos="fade-in">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
        </div>

        <ul className={this.state.active ? "slide" : null}>
          <li data-aos="fade-down" data-aos-duration="400" data-aos-delay="0">
            <Link to="/">
              <h6>Home</h6>
            </Link>
          </li>
          <li
            className="nav-rooms"
            data-aos="fade-down"
            data-aos-duration="400"
            data-aos-delay="100"
          >
            <Link to="/rooms">
              <h6>Rooms</h6>
            </Link>
          </li>
          <div
            className="logo"
            data-aos="fade-down"
            data-aos-duration="400"
            data-aos-delay="200"
          >
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
          </div>
          <li
            className="nav-gallery"
            data-aos="fade-down"
            data-aos-duration="300"
            data-aos-delay="300"
          >
            <Link to="/gallery">
              <h6>Gallery</h6>
            </Link>
          </li>
          <li
            data-aos="fade-down"
            data-aos-duration="400"
            data-aos-delay="400"
            data-aos-offset="-400"
          >
            <Link to="/contact">
              <h6>Contact</h6>
            </Link>
          </li>
        </ul>

        <div
          className={`menu-toggle ${this.state.active ? "active" : ""}`}
          onClick={this.handleToggle}
        >
          {/* <input type="checkbox" className="navbarCheckbox" /> */}
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    );
  }
}
