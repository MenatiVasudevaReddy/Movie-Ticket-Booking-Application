import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component
{
    constructor(props)
    {
        super(props);
        this.onChangemovie = this.onChangemovie.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            moviename:" ",
        }
    }
    onChangemovie(e)
    {
        this.setState({ moviename: e.target.value });
    }
    onSubmit(e)
    {
    
        e.preventDefault();
        axios.get("http://localhost:5000/movie/"+this.state.moviename)
            .then(response => {
                console.log("Movie data: "+response.data);   
            if (response.data.length > 0)
            { 
                
                window.location = '/movie/' + response.data.moviename;
            }
            else
            {
                
                window.location = '/movienotfound';
            }  
             
            })
            .catch(function (error) {
                console.log(error);
        })
    }
    render() {
        return (
            <div className="search">
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                        name="movie"
                        placeholder="Search movies"
                        onChange={this.onChangemovie}/>
                    <button type="submit" value="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default Search;