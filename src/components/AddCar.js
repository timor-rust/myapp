import React, { Component } from "react";

class AddCar extends Component {
  state = {
    fake_property: 3,
    new_car: {
      brand: null,
      model: null,
      color: null,
      year: null,
    },
  };
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="brand">Brand:</label>
          <i className="material-icons prefix">account_circle</i>
          <input type="text" id="brand" onChange={this.handleChange} required />
          <label htmlFor="model">Model:</label>
          <input type="text" id="model" onChange={this.handleChange} />
          <br />
          <label htmlFor="color">Color:</label>
          <input type="text" id="color" onChange={this.handleChange} />
          <label htmlFor="year">Year:</label>
          <input type="number" id="year" onChange={this.handleChange} />
          <div className="input-field col s6">
            <input id="input_text" type="text" data-length="10" />
            <label forHtml="input_text">Input text</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddCar;
