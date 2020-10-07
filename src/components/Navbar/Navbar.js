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
      //   <nav className="container">
      //     <div className="logo-responsive">
      //       <Link to="/">
      //         <img src={logo} alt="Beach Resort" />
      //       </Link>
      //     </div>
      //     <ul className="nav-links">
      //       <li>
      //         <Link to="/">
      //           <h6>Home</h6>
      //         </Link>
      //       </li>
      //       <li className="nav-rooms">
      //         <Link to="/rooms">
      //           <h6>Rooms</h6>
      //         </Link>
      //       </li>
      //       <div className="logo">
      //         <Link to="/">
      //           <img src={logo} alt="Beach Resort" />
      //         </Link>
      //       </div>
      //       <li className="nav-gallery">
      //         <Link to="/gallery">
      //           <h6>Gallery</h6>
      //         </Link>
      //       </li>
      //       <li>
      //         <Link to="/contact">
      //           <h6>Contact</h6>
      //         </Link>
      //       </li>
      //     </ul>
      //     <div
      //       onClick={this.handleToggle}
      //       className={this.state.active ? "hamburger active" : "hamburger"}
      //     >
      //       <div className="burger-line"></div>
      //       <div className="burger-line"></div>
      //       <div className="burger-line"></div>
      //     </div>
      //   </nav>

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
          <input type="checkbox" onClick={this.handleToggle} />
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <button className="menu-toggle">
          <input type="checkbox" />
          <div></div>
          <div></div>
          <div></div>
        </button> */}
      </nav>
    );
  }
}
