import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import img from './Images/Spiderman.jpg';
import cover from './Images/SpidermanCover.jpg';
class Movie extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            moviename: "moviename",
            print: "print",
            language: "language",
            image: "",
            cover:"",
            runtime: "runtime",
            genre: "genre",
            certification: "certification",
            releasedate: "releasedate",
            likes:93,
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/movie/"+this.props.movie )
            .then(response => {
                this.setState({
                    moviename: response.data.moviename,
                    print: response.data.print,
                    language: response.data.language,
                    image: response.data.image,
                    cover: response.data.cover,
                    runtime: response.data.runtime,
                    genre: response.data.genre,
                    certification: response.data.certification,
                    releasedate: response.data.releasedate,
                    likes:response.data.likes,
            })
            })
            .catch(function (error) {
            console.log(error);
        })
    }
    render()
    {
        return (
            <div className="movdet" style={{ backgroundImage: `url(${cover})`}} >
                <div className="background"></div>

                <div className="movie1">
                    <img src={img} alt=""/>
                </div>
                
                <div className="desc">
                    <h2>{this.props.movie}</h2>
                    <span>{ this.state.print}</span>
                    <span>{this.state.language}</span>
                    <p>{this.state.runtime}  <i className='fa fa-circle' id="dot"/>  {this.state.genre}  <i className='fa fa-circle' id="dot"/> 
                    {this.state.certification}  <i className='fa fa-circle' id="dot"/>  {this.state.releasedate}</p>
                    <p><i className="fa fa-thumbs-up"></i>{this.state.likes}% Intrested</p>
                    <Link to={'/theaters/'+this.props.movie}><button >Book Tickets</button></Link>
                </div> 
            </div>

        );
    }
}
export default Movie;