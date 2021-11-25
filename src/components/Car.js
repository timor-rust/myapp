import React, { Component } from "react";


class Car extends Component {

	render() {
		console.log(this.props);
		const { brand, model, color } = this.props;
    return (
      <div>
			 <p>Brand: {brand}</p>
			 <p>Model: {model}</p>
			 <p>Color: {color}</p>
      </div>
    );
  }
}

export default Car;
