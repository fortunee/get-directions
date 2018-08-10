import React, { Component } from 'react';
import Direction from './components/Direction/Direction';
import DirectionMap from './components/DirectionMap/DirectionMap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Direction />
        </section>
        <main>
          <DirectionMap />
        </main>
      </div>
    );
  }
}

export default App;
