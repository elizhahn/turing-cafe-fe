import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import "./Reservations.css";

const Reservations = ({ reservations, cancelReservation }) => {
  const reservationList = reservations.map(reservation => {
    return <ReservationCard
            key={reservation.id}
            id={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            cancelReservation={cancelReservation}
           />
  })
  return (
    <section className="reservations-container">
      {reservationList}
    </section>
  )
}

export default Reservations;