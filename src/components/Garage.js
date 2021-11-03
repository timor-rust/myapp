import React, { Component } from "react";
import './Garage.css'

class Garage extends Component {
  render() {
    console.log(this.props);
	  const { cars } = this.props;
	  const { delete_car } = this.props
	  const cars_css = {
		  backgroundColor: "#ff70a6",
		  padding: '12px',
		  borderRadius: '2px',
		  width: '100%'

    };
    const cars_list = cars.map(_car => {
      return _car.year > 2017 ? (
        <div key={_car.id} style={cars_css}>
          <p>Brand: {_car.brand}</p>
          <p>Model: {_car.model}</p>
          <p>Color: {_car.color}</p>
				<button style={{ background: 'yellow' }}
				onClick={() => delete_car(_car.id)}>X</button>

          <hr />
        </div>
      ) : null;
    });
    return <div className='garage'>{cars_list}</div>;
  }
}

export default Garage;
