import React, { Component } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

class Services extends Component {
  constructor(props) {
    super(props);
    Aos.init();
  }

  state = {
    services: [
      {
        icon: <i class="far fa-paper-plane"></i>,
        title: "Pick Up & Drop",
        info: "We'll pick up from airport while you comfy on your ride.",
        slug: "#",
        aosType: "fade-up",
        aosDuration: "800",
        aosOnce: "false",
        aosOffset: 500,
        aosDelay: "200",
      },
      {
        icon: <i class="fas fa-car-alt"></i>,
        title: "Parking Space",
        info: "Please consider your private parking or better yet.",
        slug: "#",
        aosType: "fade-up",
        aosDuration: "800",
        aosOnce: "false",
        aosOffset: 500,
        aosDelay: "400",
      },
      {
        icon: <i class="fas fa-glass-martini-alt"></i>,
        title: "Welcome Drink​",
        info: "We have the fuel to start your day right.",
        slug: "#",
        aosType: "fade-up",
        aosDuration: "800",
        aosOnce: "false",
        aosOffset: 500,
        aosDelay: "600",
      },
      {
        icon: <i class="fas fa-bath"></i>,
        title: "Hot & Cold Water",
        info: "Let us know if you need anything to be more comfortable",
        slug: "#",
        aosType: "fade-up",
        aosDuration: "800",
        aosOnce: "false",
        aosOffset: 500,
        aosDelay: "800",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <div className="services-wrap container">
          <Title
            title="Extra Services"
            subTitle="Services"
            aosType="fade-up"
            aosDuration="1000"
            aosOffset="300"
          />
          <div className="services-grid">
            {this.state.services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="service"
                  data-aos={item.aosType}
                  data-aos-duration={item.aosDuration}
                  data-aos-once={item.aosOnce}
                  data-aos-offset={item.aosOffset}
                  data-aos-delay={item.aosDelay}
                >
                  <div className="service-icon">
                    <div className="orange-ball"></div>
                    {item.icon}
                  </div>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                  <Link to="#" className="service-link">
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
