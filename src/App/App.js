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
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response =>  {
      if(response.ok) {
        return response.json()
      } 
        throw new Error ("Something went wrong")
    })
    .then(data => {
      this.setState({ reservations: [...this.state.reservations, ...data] })
    })
    .catch(error => {
      this.setState({error: "Something went wrong"})
    })
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

  cancelReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: "DELETE", 
    })
    .then(response => response.json())
    .then(data => {
      this.setState({reservations: [...data]})
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
          <Reservations reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
