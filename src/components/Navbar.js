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
            <Link to="/">
              <h6>Gallery</h6>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h6>Contact</h6>
            </Link>
          </li>
        </ul>
      </nav>

      // <nav className="navbar">
      //   <div className="nav-center">
      //     <div className="nav-header">
      //       <Link to="/">{/* <img src={logo} alt="Beach Resort" /> */}</Link>
      //       <button
      //         type="button"
      //         className="nav-btn"
      //         onClick={this.handleToggle}
      //       >
      //         <FaAlignRight className="nav-icon" />
      //       </button>
      //     </div>
      //     <ul
      //       className={this.state.isOpen ? "nav-links show-nav" : "nav-links "}
      //     >
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/rooms">Rooms</Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }
}
