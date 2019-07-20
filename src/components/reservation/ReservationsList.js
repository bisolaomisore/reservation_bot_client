import React, { Component } from 'react';
import { fetchReservations } from './reservation-service';

class ReservationsList extends Component {
  state = {
    reservations: []
  }

  componentDidMount() {
    fetchReservations().then(
      reservations => this.setState({ reservations })
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Reservations</h1>
        {this.state.reservations.map(reservation =>
          <div key={reservation.id}>{reservation.name}</div>
        )}
      </div>
    );
  }
}

export default ReservationsList;
