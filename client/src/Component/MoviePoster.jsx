import React, { Component } from 'react';
import axios from 'axios';
import img from './Images/Spiderman.jpg';

class MoviePoster extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            ticket: {
                ticketId:props.ticketId,
                moviename: "",
                theatrename: "",
                print: "",
                language:"",
                location: "",
                time:"",
                date: "",  
                seats: "",
                totaltickets: 0,
                concessionfee: 0,
                subtotal:0,
                total: 0,
                booked:false,
            },
            image:"",
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:5000/ticket/" + this.props.ticketId)
            .then(response => {
                this.setState(prevState => ({
                    ticket: {
                        ...prevState.ticket,
                        moviename: response.data.moviename,
                        theatrename: response.data.theatrename,
                        location: response.data.location,
                        print: response.data.print,
                        language: response.data.language,
                        date: response.data.date,
                        time: response.data.time,
                        seats: response.data.seats,
                        totaltickets: response.data.totaltickets,
                        concessionfee: response.data.concessionfee,
                        subtotal: response.data.subtotal,
                        total: response.data.total,
                    }
                })) 

                axios.get("http://localhost:5000/movie/" + this.state.ticket.moviename)
                    .then(response => {
                        this.setState({
                        image:response.data.image
                    })
                })
             
            })
            .catch(function (err) {
                if(err)
                 console.log(err);
            })
            
        }
    render() {
        return (
            <div className="moviePoster">
                <img src={img} alt="" />
                <div className="moviePoster-sub">
                    <div className="movpos-sub">
                        <h3>{this.state.ticket.moviename},({this.state.ticket.print})</h3>
                        <p>{this.state.ticket.theatrename} , {this.state.ticket.location}</p>
                        <p>{this.state.ticket.date} ,  {this.state.ticket.time}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviePoster;