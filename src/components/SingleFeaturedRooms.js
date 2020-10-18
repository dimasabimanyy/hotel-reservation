import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Carousel from "react-elastic-carousel";

export default class SingleFeaturedRooms extends Component {
  static contextType = RoomContext;
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
          <h1 className="other-rooms-title">Other Rooms</h1>
          <div className="featured-rooms-carousel">
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
