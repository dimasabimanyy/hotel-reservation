import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import testi1 from "../images/joe.jpg";
import testi2 from "../images/khabib.jpg";
import testi3 from "../images/tony.jpg";
import testiLogo1 from "../images/testimonials_logo_1.png";
import testiLogo2 from "../images/testimonials_logo_2.png";
import testiLogo3 from "../images/testimonials_logo_3.png";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials">
        <div className="testimonials-wrap container">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            className="carousel-testimonial"
          >
            <div>
              <div className="myCarousel">
                <img
                  src={testiLogo1}
                  alt="testimonial 1"
                  className="testimonial-company"
                />
                <p>
                  This was our 4th visit to the hotel. Once again really enjoyed
                  our stay. Good facilites in the room. Breakfast and DMT at
                  night both good. Like that you can have coffee/tea all day.
                </p>
                <img
                  src={testi1}
                  alt="testimonial 1"
                  className="testimonial-person"
                />
                <h4>Joe Rogan</h4>
                <h5>Podcaster</h5>
              </div>
            </div>

            <div>
              <div className="myCarousel">
                <img
                  src={testiLogo2}
                  alt="testimonial 1"
                  className="testimonial-company"
                />
                <p>
                  We stayed here for a long weekend and was very impressed with
                  the staff hotel. Very respectful and friendly. Rooms were very
                  nice and comfortable.
                </p>
                <img
                  src={testi2}
                  alt="testimonial 2"
                  className="testimonial-person"
                />
                <h4>Khabib Nurmagomedov</h4>
                <h5>UFC Fighter | Lightweight Champ</h5>
              </div>
            </div>

            <div>
              <div className="myCarousel">
                <img
                  src={testiLogo3}
                  alt="testimonial 3"
                  className="testimonial-company"
                />
                <p>
                  Thank you for an amazing stay! your hospitality is quite
                  outstanding. The sport center is also very good. Hope to be
                  back soon.
                </p>
                <img
                  src={testi3}
                  alt="testimonial 3"
                  className="testimonial-person"
                />
                <h4>Tony Ferguson</h4>
                <h5>UFC Fighter | Boogeyman</h5>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
