import React, { Component } from 'react';
import './App.css';

import Temperature from './Temperature/Temperature.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getData();
  }

  componentDidMount() {
    this.timer = setInterval(() => getData(), 1000 * 60)
  }

  render() {
    return (
      <div className="App">
        <Temperature temperature={this.state.temperature} />
      </div>
    );
  }
}

const getData = async () => fetch('/api/data')
  .then((Response) => Response.json())
  .then((temp) => this.setState(temp));

export default App;
