import React, { Component } from 'react';
import './App.css';

import Temperature from './Temperature/Temperature.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatures: []
    }
  }

  componentDidMount() {
    fetch('temperaturer.herokuapp.com/api/data')
      .then((Response) => Response.json())
      .then(temperatures => this.setState({temperatures}));
  }

  render() {
    return (
      <div className="App">
        <Temperature temperatures={this.state.temperatures} />
      </div>
    );
  }
}

export default App;
