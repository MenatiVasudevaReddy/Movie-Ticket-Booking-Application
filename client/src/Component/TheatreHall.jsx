import React, { Component } from 'react';
import Seats from './Seats';

class TheatreHall extends Component {

    render() {
        return (
            <Seats onseatselect={this.props.onSelectedSeats}
                theatrename={this.props.theatrename}>
            </Seats>
        );
    }
}

export default TheatreHall;