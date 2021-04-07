import React, { Component } from "react";
import "./ReservationForm.css";

class ReservationForm extends Component {
  constructor() {
    super()
    this.state={
      name: "",
      date: "",
      time: "",
      number: "",
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
        className="form-input"
        placeholder="Name"
        value={this.state.name}
        name="name"
        onChange={this.handleChange}
        />
         <input
        className="form-input"
        placeholder="Date (mm/dd)"
        value={this.state.date}
        name="date"
        onChange={this.handleChange}
        />
          <input
        className="form-input"
        placeholder="Time"
        value={this.state.time}
        name="time"
        onChange={this.handleChange}
        />
          <input
        className="form-input"
        placeholder="Number of guests"
        value={this.state.number}
        name="number"
        onChange={this.handleChange}
        />
        <button type="submit">Make Reservation</button>
      </form>
    )
  }
}

export default ReservationForm;