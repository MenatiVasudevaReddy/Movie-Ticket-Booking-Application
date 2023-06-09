
import React, { Component } from "react";
import MoviePoster from './MoviePoster';
import Summary from './Summary';

class BookingSummary extends Component{

    render()
    {
        return (
            <div >
                <MoviePoster ticketId={this.props.match.params.ticketId} />
                <Summary ticketId={this.props.match.params.ticketId}/>
            </div>
        );
    }
}

export default BookingSummary;