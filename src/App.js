import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <label for='destination'>Destination: </label>
          <br />
          <br />
          <input type='text' name='destination' />
          <br />
          <br />
          <label for='destination'>Location: </label> <br />
          <input type='text' name='location' />
          <br />
          <br />
          <button>View Direction</button>
        </section>
      </div>
    );
  }
}

export default App;
