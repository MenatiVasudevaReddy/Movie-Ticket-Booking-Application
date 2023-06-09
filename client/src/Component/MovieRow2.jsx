import React, { Component } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";
import { Link } from 'react-router-dom';
import img1 from './Images/Beast.jpg';
import img2 from './Images/Uncharted.jpg';
import img3 from './Images/KGF2.jfif';
import img4 from './Images/DoctorStrange2.jpg';


class MovieRow2 extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            movies: [
                {
                    moviename: "Beast",
                    genre: "Action",
                    image: "Images/Beast.jpg",
                    likes: 98,
                },
                {
                    moviename: "Uncharted",
                    genre: "Fantasy",
                    image: "Images/Uncharted.jpg",
                    likes:89,
                },
                {
                    moviename: "KGF-2",
                    genre: "Action",
                    image:"Images/KGF2.jfif",
                    likes:95,
                },
                {
                    moviename: "Doctor Strange 2",
                    genre: "Thriller|Horror",
                    image: "Images/DoctorStrange2.jpg",
                    likes:93,
                },

            ], 
        };
    }
    componentDidMount() {
        /*axios.get("http://localhost:5000/movie")
            .then(response => {
                if (response.data.length > 0)
                {
                    this.setState({
                        movies:response.data.map(movie=>movie),
                    })
                }
        })*/
    }
    render() {
        
        return (
            <div className="movRow">
                {this.state.movies.map(movie =>     
                    <Link to={"/movie/" + movie.moviename}>
                        <MovieBox key={movie.moviename}
                            Movie={movie} />
                    </Link>
                  )}     
            </div>
        );
    }
}

export default MovieRow2;