import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import sectionImg from "../images/section-title.png";
import Carousel from "react-elastic-carousel";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms: rooms, loading } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    const breakpoint = [
      { width: 0, itemsToShow: 1 },
      { width: 768, itemsToShow: 2 },
      { width: 1200, itemsToShow: 3 },
      { width: 1500, itemsToShow: 4 },
    ];

    return (
      <section className="featured-rooms">
        <div className="featured-wrap container">
          <Title title="Rooms & Suites" subTitle="Discover" img={sectionImg} />
          <div className="featured-rooms-center">
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
