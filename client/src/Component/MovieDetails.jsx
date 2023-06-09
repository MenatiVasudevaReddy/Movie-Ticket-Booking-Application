import React, { Component } from 'react';
import CastRow from './CastRow';
import CrewRow from './CrewRow';
import About from './About';

class MovieDetails extends Component
{
    render() {
        return (
            <div className="movdet2">
                <About movie={this.props.movie}></About>
                <CastRow movie={this.props.movie}></CastRow>
                <CrewRow movie={this.props.movie}></CrewRow>
            </div>
        );
    }
}
export default MovieDetails;