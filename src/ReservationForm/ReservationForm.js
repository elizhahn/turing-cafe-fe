import React, { Component } from "react";
import "./ReservationForm.css";

class ReservationForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      name: "",
      date: "",
      time: "",
      number: "",
    }
  }

  handleChange = (event) => {
   const { name, value } = event.target
   this.setState({ [name]: value })
  }

  // formatReservation = () => {
  //   const number = Number(this.state.number)
  // }

  onSubmit = (event) => {
    event.preventDefault();
    const number = Number(this.state.number)
    const newRes = {
     id: Date.now(),
     name: this.state.name,
     date: this.state.date,
     time: this.state.time, 
     number: number,
    }
    this.props.addReservation(newRes)
    this.setState({name: "", date: "", time: "", number: ""})
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.onSubmit} data-test="reservation-form">
        <input
        className="form-input"
        placeholder="Name"
        value={this.state.name}
        name="name"
        onChange={this.handleChange}
        data-test="reservation-input-name"
        />
         <input
        className="form-input"
        placeholder="Date (mm/dd)"
        value={this.state.date}
        name="date"
        onChange={this.handleChange}
        data-test="reservation-input-date"
        />
          <input
        className="form-input"
        placeholder="Time"
        value={this.state.time}
        name="time"
        onChange={this.handleChange}
        data-test="reservation-input-time"
        />
          <input
        className="form-input"
        placeholder="Number of guests"
        value={this.state.number}
        name="number"
        onChange={this.handleChange}
        data-test="reservation-input-number"
        />
        <div>
          <button className="form-btn" type="submit" data-test="form-btn">Make Reservation</button>
        </div>
      </form>
    )
  }
}

export default ReservationForm;