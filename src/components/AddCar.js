import React, { Component } from "react";
import ComponentOne from "./ComponentOne";

class AddCar extends Component {
  state = {
    fake_property: 3,
    display: true,
    new_car: {
      brand: null,
      model: null,
      color: null,
      year: null,
    },
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("garage componentDidUpdate");
    console.log("garage prevState");
    console.log(prevState);
    console.log("garage prevProps");
    console.log(prevProps);
  }

  handleChange = e => {
    const really_new_car = { ...this.state.new_car };
    really_new_car[e.target.id] = e.target.value;
    this.setState({
      new_car: really_new_car,
    });
    console.log(this.state.new_car);
    console.log(e.target.id);
    console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCar(this.state.new_car);
    console.log(this.state.new_car);
  };

  render() {
    let comp;
    if (this.state.display) {
      comp = <ComponentOne />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="brand">Brand:</label>
          <input type="text" id="brand" onChange={this.handleChange} required />
          <label htmlFor="model">Model:</label>
          <input type="text" id="model" onChange={this.handleChange} />
          <br />
          <label htmlFor="color">Color:</label>
          <input type="text" id="color" onChange={this.handleChange} />
          <label htmlFor="year">Year:</label>
          <input type="number" id="year" onChange={this.handleChange} />
          <button type="submit">Submit</button>
			 </form>
			 <br />
			 <button onClick={() => {this.setState({display: !this.state.display})}}>Delete</button>
        {comp}
      </div>
    );
  }
}

export default AddCar;
