import React, { Component } from 'react';
import Reservations from "../Reservations/Reservations";
import ReservationForm from "../ReservationForm/ReservationForm";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations: [],
      error: "",
    }
  }

  componentDidMount() {
    console.log("test")
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response =>  response.json())
    .then(data => {
      this.setState({ reservations: [...this.state.reservations, ...data] })
    })
    .then(error => console.log(error))
  }

  addReservation = (newRes) => {
    
    fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      headers: {
        "Content-type": "application/json", 
      },
      body: JSON.stringify(newRes),
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ reservations: [...this.state.reservations, data]})
    })
    .catch(error => console.log(error))
 
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addReservation = {this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
