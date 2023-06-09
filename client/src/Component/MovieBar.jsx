import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MovieBar extends Component
{
   
    render() {
        return (
            <div className="movieBar">
                <h2>{this.props.movie}</h2>
                <span>{this.props.print}</span>
                <span>{this.props.theatre}</span>
                <span><i className="far fa-clock"></i>{this.props.time}</span>

                <Link to={"/bookingsummary/"+this.props.ticketId}>
                    <button onClick={this.props.onBook} className="book" type="submit" form="book">
                        Book Tickets
                    </button>
                </Link>

            </div>
        );
    }
}

export default MovieBar;