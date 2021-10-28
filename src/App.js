import React, { Component } from 'react';
import Car from './components/Car';


class App extends Component {
	render() {
		return (
      <div className="App">
        <header className="App-header">
          <p>Hello World</p>
					<Car />
					<hr />
					<Car />
					<hr />
        </header>
      </div>
    );

	}
  
}

export default App;
