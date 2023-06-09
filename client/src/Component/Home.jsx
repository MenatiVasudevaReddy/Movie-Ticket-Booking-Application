import React, { Component } from 'react';
import MovieRow from './MovieRow';
import MovieRow2 from './MovieRow2';
import Footer from './Footer';
import NavBar from './NavBar';

class Home extends Component{

   

    render()
    {
        return (
            <div >
                <NavBar />
                <h1>New Releases</h1>
                <MovieRow/>
                <h1>Upcoming Movies</h1>
                <MovieRow2/>
                <Footer/>
            </div>
        );
    }
}

export default Home;