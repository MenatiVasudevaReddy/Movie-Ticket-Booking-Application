import React, { Component } from 'react';

class MovieBox extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            movie: props.Movie,
        };
    }
    
    render() {
        return (
            <div className="movieBox">
                <button  name="moviename">
                    <div className="movie">
                        <img src={process.env.PUBLIC_URL+this.props.Movie.image} alt=""/>
                        <div className="submov">
                            <span><i className="fa fa-heart"></i>likes</span>
                            <p>{this.props.Movie.likes}</p>
                        </div>
                    </div>
                </button>
                <h4>{this.props.Movie.moviename}</h4>
                <p>{this.props.Movie.genre}</p>
            </div>
        );
    }
}

export default MovieBox;