import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import SingleFeaturedRooms from "../components/SingleFeaturedRooms";
import defaultBcg from "../images/room-1.jpg";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import "../css/SingleRoom.css";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);

    if (!room) {
      return (
        <div className="error-rooms">
          <h3>No such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    // pick every image except header image / array destructuring
    const [mainImg, ...defaultImg] = images;

    return (
      <section id="single-room-page">
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${room.name} room`}>
            <Link to="/rooms" className="btn-primary single-room">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>

        <section id="single-room-section" className="container">
          <section className="left-single-room">
            <div className="single-room-img-wrap">
              <div className="single-room-big">
                <img src={mainImg} alt={room.name} />
              </div>
              <div className="single-room-img-piece">
                {defaultImg.map((image, index) => {
                  return <img key={index} src={image} alt={name} />;
                })}
              </div>
              <div className="s-room-desc">
                <h4>Description</h4>
                <div className="s-orange-line"></div>
                <div>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="right-single-room">
            <div className="s-room-price">
              <p>
                from <div></div>
                <span>${price}</span>/night
              </p>
              <Link to="/rooms" className="btn-primary single-room">
                Check availability this room
              </Link>
            </div>

            <div className="s-additional-info">
              <h5>Additional Information</h5>
              <div className="s-gray-line"></div>
              <ul className="s-additional-info-list">
                <li>Size : {size} SQF</li>
                <li>
                  Max capacity :
                  {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                </li>
                <li>{pets ? "Pets Allowed" : "No Pets Allowed"}</li>
                <li>{breakfast && "Free Breakfast Included"}</li>
                {extras.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>

            <div className="direct-reservation">
              <h3>Direct Reservation</h3>
              <div>
                <i class="fas fa-phone-volume"></i>
                <h5>+844 3450 33 11</h5>
              </div>
              <div>
                <i class="far fa-envelope-open"></i>
                <h5>book@erios.com</h5>
              </div>
            </div>
          </section>
        </section>

        <SingleFeaturedRooms />
        {/* <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price : ${price}</h6>
              <h6>Size : {size} SQFT</h6>
              <h6>
                Max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section> */}
        {/* <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section> */}
      </section>
    );
  }
}
