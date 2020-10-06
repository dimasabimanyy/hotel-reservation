import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
// import Title from "./Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    // size,
    minSize,
    maxSize,
    pets,
    breakfast,
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");

  // add all
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <div className="filter-container-wrap container">
        {/* <Title title="Find Your Rooms" /> */}
        <form className="filter-form">
          {/* select type */}
          <div className="form-group">
            <label htmlFor="type">Room Type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control room-type"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          {/* end select type */}
          {/* guest */}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control guests"
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          {/* end guest */}
          {/* room price */}
          <div className="form-group price">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/* end room price */}
          {/* Size */}
          <div className="form-group room-size">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          {/* end of size */}
          {/* extras */}
          <div className="form-group break-pet">
            <div className="single-extra breakfast">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">Breakfast</label>
            </div>
            <div className="single-extra pet">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">Pets</label>
            </div>
          </div>
          {/* end of extras */}
        </form>
      </div>
    </section>
  );
}

export default RoomsFilter;
