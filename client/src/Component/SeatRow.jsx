import React, { Component } from 'react';
import Seat from './Seat';
class SeatRow extends Component
{
    
    render() {
        return (
            <div className="seatrow" >
                {this.props.seats.map(id =>
                    <Seat onClick={() => this.props.onSelectSeat(this.props.rowid,this.props.rowno,id)}
                        sid={id}
                        className={this.props.onGetClass(this.props.rowno, id)}
                        key={id}>
                    </Seat>
                    )}
            </div>
        );
    }
}
export default SeatRow;