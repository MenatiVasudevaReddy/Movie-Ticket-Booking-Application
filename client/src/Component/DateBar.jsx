import React, { Component } from 'react';

class DateBar extends Component {
   
    render() {
        return (
            <div className="dateBar">
                <div className="dateBar-sub">
                {this.props.Dates.map(date =>
                    <button className="date"
                        id={this.props.getId(date.id)}
                        key={date.id}
                        onClick={() => this.props.onClick(date.id, date.day, date.month)}>
                        <p>{date.day}<br />{date.month}</p>
                    </button>
                    )}   
                </div>    
            </div>
        );
    }
}

export default DateBar;