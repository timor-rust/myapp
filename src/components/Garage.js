import React, { Component } from "react";

class Garage extends Component {
  //<Car brand="Ferrari" model="Testa rocca" color="Red"></Car>

  render() {
    console.log(this.props);
    const { cars } = this.props;
    const cars_list = cars.map(_car => {
      return (
        <div key={_car.id}>
          <p>Brand: {_car.brand}</p>
          <p>Model: {_car.model}</p>
          <p>Color: {_car.color}</p>
          <hr />
        </div>
      );
    });
    return <div>{cars_list}</div>;
  }
}

export default Garage;
