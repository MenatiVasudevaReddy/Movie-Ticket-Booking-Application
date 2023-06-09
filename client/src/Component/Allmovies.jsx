import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieBox from './MovieBox';
import NavBar from './NavBar';
import Footer from './Footer';

class Allmovies extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            movies:[],
        }

    }

    componentDidMount()
    {
        axios.get("http://localhost:5000/movie")
            .then(response => {
                if (response.data.length > 0)
                {
                    this.setState({
                        movies:response.data,
                    })
                }
                console.log(response.data);
            })
            .catch(function (err)
            {
                if (err)
                    console.log(err);
        })
    }
    render() {
        
        return (
            <div>
                <NavBar />
                <h1>All Movies</h1>
                <div className="movRow1">
                    {this.state.movies.map(movie =>
                        <Link to={"/movie/"+movie.moviename}><MovieBox Movie={movie} /></Link>
                    )}     
                </div>
                <Footer/>    
            </div>
        );
    }
}

export default Allmovies;