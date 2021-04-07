import React, { Component } from 'react';
import Reservations from "../Reservations/Reservations";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations: [],
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(data => {
      this.setState({ reservations: data })
    })
    .then(error => console.log(error))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
