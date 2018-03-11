import React, { Component } from 'react';
import './App.css';

import Temperature from './Temperature/Temperature.js'

class App extends Component {
  state = this.getData();

  componentDidMount() {
    this.timer = setInterval(() => this.getData(), 1000 * 60)
  }

  async getData() {
    fetch('/api/data')
      .then((Response) => Response.json())
      .then((temp) => this.setState(temp));
  }

  render() {
    return (
      <div className="App">
        <Temperature temperature={this.state.temperature} />
      </div>
    );
  }
}

export default App;
