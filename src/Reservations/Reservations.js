import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";

const Reservations = ({ reservations }) => {
  const reservationList = reservations.map(reservation => {
    return <ReservationCard
            key={reservation.id}
            id={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
           />
  })
  return (
    <section>
      {reservationList}
    </section>
  )
}

export default Reservations;