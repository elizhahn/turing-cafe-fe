import React from "react";
import "./ReservationCard.css";

const ReservationCard = (props) => {
  return (
    <article className="reservation-card" id={props.id} data-test="reservation-card">
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <p>{props.time}pm</p>
      <p>number of Guests: {props.number}</p>
      <button onClick={() => props.cancelReservation(props.id)} data-test="cancel-btn"> Cancel Reservation</button>
    </article>
  )
}

export default ReservationCard