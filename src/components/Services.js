import React, { Component } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

class Services extends Component {
  state = {
    services: [
      {
        icon: <i class="far fa-paper-plane"></i>,
        title: "Pick Up & Drop",
        info: "We'll pick up from airport while you comfy on your ride.",
        slug: "/",
      },
      {
        icon: <i class="fas fa-car-alt"></i>,
        title: "Parking Space",
        info: "Please consider your private parking or better yet.",
        slug: "/",
      },
      {
        icon: <i class="fas fa-glass-martini-alt"></i>,
        title: "Welcome Drink​",
        info: "We have the fuel to start your day right.",
        slug: "/",
      },
      {
        icon: <i class="fas fa-bath"></i>,
        title: "Hot & Cold Water",
        info: "Let us know if you need anything to be more comfortable",
        slug: "/",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <div className="services-wrap container">
          <Title title="Extra Services" subTitle="Services" />
          <div className="services-grid">
            {this.state.services.map((item, index) => {
              return (
                <div key={index} className="service">
                  <div className="service-icon">
                    <div className="orange-ball"></div>
                    {item.icon}
                  </div>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                  <Link to="/{slug}" className="service-link">
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
