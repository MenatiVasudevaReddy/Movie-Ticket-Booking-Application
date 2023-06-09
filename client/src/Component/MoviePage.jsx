import React, { Component } from 'react';
import Movie from './Movie';
import MovieDetails from './MovieDetails';
import Footer from './Footer';
class MoviePage extends Component{

    render() {
        return (
            
            <div >
                <Movie movie={this.props.match.params.id}/>
                <MovieDetails movie={this.props.match.params.id} />
                <Footer/>
            </div>

        );
    }
}
export default MoviePage;