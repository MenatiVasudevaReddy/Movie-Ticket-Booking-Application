import React, { Component } from 'react';
import img1 from './Images/booked.png';
import axios from 'axios';
import img from './Images/Spiderman.jpg';
class Ticket extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            ticket: {
                ticketId:this.props.ticketId,
                moviename: "",
                theatrename: "",
                location: "",
                print: "",
                language:"",
                time:"",
                date: "",  
                seats: [],
                totaltickets: 0,
                concessionfee: 0,
                subtotal: 0,
                total:0,
                booked:true,
            }
        }
    }
    componentDidMount()
    {
        const res = async () => {
            const response = await axios.get("http://localhost:5000/ticket/" + this.props.ticketId);
            this.setState(prevState => ({
                    ticket: {
                        ...prevState.ticket,
                        moviename : response.data.moviename,
                        theatrename : response.data.theatrename,
                        location: response.data.location,
                        print: response.data.print,
                        language: response.data.language,
                        date: response.data.date,
                        time:response.data.time,
                        seats:response.data.seats,
                        totaltickets: response.data.totaltickets,
                        concessionfee:response.data.concessionfee,
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
        }
        res();
    }
    render() {
        return (
            <div className="ticket">
                <div className="ticket-img">
                    <img src={img}  alt=""/>
                </div>
        
                <h2> {this.state.ticket.moviename} ({this.state.ticket.print})</h2>
                <p><b>LANGUAGE:</b> {this.state.ticket.language} </p>
                <p> {this.state.ticket.theatrename} , {this.state.ticket.location}</p>
                <p>
                    <b>SEATS: </b>
                    {this.state.ticket.seats.map(seat => 
                        <span>{seat},</span>
                    )}
                </p>
                <p><b>DATE:</b> {this.state.ticket.date}</p>
                <p><b>TIME:</b> {this.state.ticket.time}</p>
                <p><b>TOTAL PRICE:</b> Rs.{this.state.ticket.total}</p>

            
                <img id="booked" src={img1} alt="" />
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
                <div className="dot4"></div>
                <div className="dot5"></div>
                <div className="dot6"></div>
                <div className="dot7"></div>
        
            </div>
        );
    }
}

export default Ticket;