import React, { Component } from "react";
import logo from "../../images/logo_light.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  state = {
    active: false,
  };

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <nav>
        <div className="logo-responsive">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
        </div>

        <ul className={this.state.active ? "slide" : null}>
          <li>
            <Link to="/">
              <h6>Home</h6>
            </Link>
          </li>
          <li className="nav-rooms">
            <Link to="/rooms">
              <h6>Rooms</h6>
            </Link>
          </li>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
          </div>
          <li className="nav-gallery">
            <Link to="/gallery">
              <h6>Gallery</h6>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <h6>Contact</h6>
            </Link>
          </li>
        </ul>

        <div className="menu-toggle">
          <input
            type="checkbox"
            onClick={this.handleToggle}
            className="navbarCheckbox"
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    );
  }
}
