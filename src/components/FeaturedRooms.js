import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import sectionImg from "../images/section-title.png";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms: rooms, loading } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <div className="featured-wrap container">
          <Title title="Rooms & Suites" subTitle="Discover" img={sectionImg} />
          <div className="featured-rooms-center">
            {loading ? <Loading /> : rooms}
          </div>
        </div>
      </section>
    );
  }
}
