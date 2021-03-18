import React, { Component } from "react";
import CarItem from "./CarItem";
import data from "./cars.json";

class CarList extends Component {
  render() {
    return (
      <div>
        {data.map((elt) => (
          <CarItem marke={elt["CarMake"]} />
        ))}
      </div>
    );
  }
}

export default CarList;
