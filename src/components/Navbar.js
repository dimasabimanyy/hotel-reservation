import React, { Component } from "react";
import logo from "../images/logo_light.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="container">
        <ul className="nav-left">
          <li>
            <Link to="/">
              <h6>Home</h6>
            </Link>
          </li>
          <li>
            <Link to="/rooms">
              <h6>Rooms</h6>
            </Link>
          </li>
        </ul>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
        </div>
        <ul className="nav-right">
          <li>
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
      </nav>
    );
  }
}
