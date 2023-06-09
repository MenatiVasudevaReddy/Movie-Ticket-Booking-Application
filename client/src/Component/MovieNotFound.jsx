import React, { Component } from 'react';
import reel from './Images/reel.jpg';

class MovieNotFound extends Component{

    render()
    {
        return (
            <div className="mntf">
                <h1>Movie not found</h1>
                <center>
                    <img src={reel} alt=""></img>
                </center> 
            </div>
        );
    }

}

export default MovieNotFound;