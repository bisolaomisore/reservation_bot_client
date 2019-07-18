import React, { Component } from 'react';

class ReservationsList extends Component {
  state = {
    reservations: []
  }

  componentDidMount() {
    let url = '';
    if (process.env.NODE_ENV === 'production') {
      url = process.env.REACT_APP_SERVER_URL;
    }

    url += '/reservation';
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(reservations => this.setState({ reservations }));
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
