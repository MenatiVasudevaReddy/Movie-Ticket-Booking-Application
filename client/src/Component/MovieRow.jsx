import React, { Component } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";
import { Link } from 'react-router-dom';
//import img1 from './Images/Spiderman.jpg';
//import img2 from './Images/83.jpg';
//import img3 from './Images/Valimai.jpg';
//import img5 from './Images/RRR.jpg';


class MovieRow extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            movies: [], 
            
        };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/movie")
            .then(response => {
                if (response.data.length > 0)
                {
                    this.setState({
                        movies:response.data.map(movie=>movie),
                    })
                }
        })
    }
    render() {
        
        return (
            <div className="movRow">
                {this.state.movies.map(movie => 
                    <Link to={"/movie/" + movie.moviename}>
                        <MovieBox key={movie.moviename} Movie={movie} />
                    </Link>
                    
                )}     
            </div>
        );
    }
}

export default MovieRow;