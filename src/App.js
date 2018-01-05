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

  componentDidMount() {
    fetch('localhost:8001/api/data')
    .then(results => {
      return results.json();
    }).then( data => {
        let temperature = data.results.map(temp) => {
          return (
            <div key={temp.results}>
              <p>
                Continue from here...
              </p>
            </div>
          );
        }
      })
    this.setState({temperature: temperature})
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Temperature is:</h1>
        <Temperature temperature={this.state.temperature}/>
      </div>
    );
  }
}

export default App;
