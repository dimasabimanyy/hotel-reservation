import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import testi1 from "../images/joe.jpg";
import testi2 from "../images/khabib.jpg";
import testi3 from "../images/tony.jpg";
import testiLogo1 from "../images/testimonials_logo_1.png";
import testiLogo2 from "../images/testimonials_logo_2.png";
import testiLogo3 from "../images/testimonials_logo_3.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    Aos.init();
    this.state = [
      {
        img: testi1,
        logo: testiLogo1,
        name: "Joe Rogan",
        as: "Podcaster",
        testimoni:
          "This was our 4th visit to the hotel. Once again really enjoyed our stay. Good facilites in the room. Breakfast and DMT at night both good. Like that you can have coffee/tea all day.",
      },
      {
        img: testi2,
        logo: testiLogo2,
        name: "Khabib Nurmagomedov",
        as: "UFC Lightweight Champ",
        testimoni:
          "We stayed here for a long weekend and was very impressed with the staff hotel. Very respectful and friendly. Rooms were very nice and comfortable.",
      },
      {
        img: testi3,
        logo: testiLogo3,
        name: "Tony Ferguson",
        as: "Boogeyman",
        testimoni:
          "Thank you for an amazing stay! your hospitality is quite outstanding. The sport center is also very good. Hope to be back soon.",
      },
    ];
  }

  render() {
    return (
      <div className="testimonials">
        <div
          className="testimonials-wrap container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="400"
          data-aos-once="false"
        >
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            className="carousel-testimonial"
          >
            {this.state.map((item) => {
              return (
                <div className="my-carousel">
                  <div>
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="testimonial-company"
                    />
                    <p>{item.testimoni}</p>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="testimonial-person"
                    />
                    <h4>{item.name}</h4>
                    <h5>{item.as}</h5>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}
