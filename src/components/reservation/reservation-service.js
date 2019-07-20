const fetchReservations = async() => {
  return fetch('http://localhost:3001/reservation')
    .then(res => res.json())
    .then(reservations => {
      return reservations;
    });
}

module.exports = {fetchReservations};
