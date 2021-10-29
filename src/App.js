import React, { Component } from "react";
import Car from "./components/Car";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello World</p>
          <Car brand="Honda" model="Civic" color="Black"></Car>
          <hr />
          <Car brand="Toyota" model="Kamry" color="White"></Car>
          <hr />
          <Car brand="Ferrari" model="Testa rocca" color="Red"></Car>
        </header>
      </div>
    );
  }
}

export default App;
