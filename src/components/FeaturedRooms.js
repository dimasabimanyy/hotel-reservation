import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import Carousel from "react-elastic-carousel";
import Aos from "aos";
import "aos/dist/aos.css";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  constructor(props) {
    super(props);
    Aos.init();
  }

  render() {
    let { featuredRooms: rooms, loading } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    const breakpoint = [
      { width: 1, itemsToShow: 1 },
      { width: 500, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];

    return (
      <section className="featured-rooms">
        <div className="featured-wrap container">
          <Title
            title="Rooms & Suites"
            subTitle="Discover"
            aosType="fade-in"
            aosDuration="1000"
          />
          <div
            className="featured-rooms-carousel"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {loading ? (
              <Loading />
            ) : (
              <Carousel breakPoints={breakpoint}>{rooms}</Carousel>
            )}
          </div>
        </div>
      </section>
    );
  }
}
