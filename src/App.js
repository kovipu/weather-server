import React, { Component } from 'react';
import './App.css';

import Temperature from './Temperature/Temperature.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
  }


  render() {
    return (
      <div className="App">
        <h1 className="App-title">Temperature is:</h1>
        <Temperature/>
      </div>
    );
  }
}

export default App;
