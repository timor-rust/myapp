import React, { Component } from "react";
//import Car from "./components/Car";
import Garage from "./components/Garage";
import AddCar from "./components/AddCar";

class App extends Component {
  componentDidMount() {
    console.log("mount");
  }

  constructor() {
    super();
    console.log("ctor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    // if (props.name !== state.name) {
    //   return {
    //     name: props.name,
    //   };
    // }
    // return null;

    console.log("&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(props);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(state);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&");
   // return { _time: new Date() };
	  if (state.my_cars.length === 0) {
		  console.log('000000000000000000000000000000');
		  return { my_cars: [{brand: 'Bentley', model: 'DEMO', color: 'DEMO', year: 2021, id: 5}]}
	  }
	  return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("========= ----------");
    console.log(this.state.x);
    console.log("garage componentDidUpdate");
    console.log(prevState);
    console.log(prevProps);
    // this.setState({ x: this.state.x + 1 });
  }

  static my_car_seq = 4;
  state = {
    x: 1,
    my_cars: [
      { brand: "Honda", model: "Civic", color: "Black", year: 2018, id: 1 },
      { brand: "Toyota", model: "Kamry", color: "White", year: 2019, id: 2 },
      {
        brand: "Ferrari",
        model: "Testa rocca",
        color: "Red",
        year: 2020,
        id: 3,
      },
    ],
  };

  addCar = new_car => {
    const new_arr = [...this.state.my_cars];
    new_arr.push({ ...new_car, id: App.my_car_seq++ });
    this.setState({
      my_cars: new_arr,
    });
  };

  deleteCar = _id => {
    const new_cars = this.state.my_cars.filter(car => car.id !== _id);
    this.setState({
      my_cars: new_cars,
    });
  };

  render() {
    return (
      <div className="App" style={{ marginLeft: 10 }}>
        <header className="App-header">
          <p>Garage!</p>
          <hr />
          <Garage cars={this.state.my_cars} delete_car={this.deleteCar} />
          <AddCar addCar={this.addCar} />
        </header>
      </div>
    );
  }
}

export default App;
