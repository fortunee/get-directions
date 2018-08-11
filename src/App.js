import React, { Component } from 'react';
import Direction from './components/Direction/Direction';
import DirectionMap from './components/DirectionMap/DirectionMap';

import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <section>
      //     <Direction />
      //   </section>
      //   <main>
      //     <DirectionMap />
      //   </main>
      // </div>
      <React.Fragment>
        <main className='App'>
          <section>
            <h1>Get Directions</h1>
            <br />
            <h2>Enter a destination</h2>
            <br />
            Destination:
            <input type='text' name='destination' />
            Location:
            <input type='text' name='location' />
            <button className='btn'>View Direction</button>
          </section>
          <div>
            This the map section
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
