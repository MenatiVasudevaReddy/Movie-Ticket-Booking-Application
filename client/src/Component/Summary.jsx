import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Summary extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            total: 0,
            subtotal: 0,
            confee: 0,
            length: 0,
            ticket: {
                ticketId:props.ticketId,
                moviename: "def",
                theatrename: "def",
                print:"def",
                location: "def",
                time:"",
                date: "",  
                seats: [],
                totaltickets: 10,
                concessionfee: 10,
                subtotal:10,
                total: 10,
                booked:false,
            }
            
        }
        this.calculateSeats = this.calculateSeats.bind(this);
        this.updateSeats = this.updateSeats.bind(this);
    }
    componentDidMount()
    {
        axios.get("http://localhost:5000/ticket/" + this.props.ticketId)
            .then(response => {
                this.setState(prevState => ({
                    ticket: {
                        ...prevState.ticket,
                        moviename : response.data.moviename,
                        theatrename : response.data.theatrename,
                        location: response.data.location,
                        print: response.data.print,
                        language:response.data.language,
                        date: response.data.date,
                        time:response.data.time,
                        seats:response.data.seats,
                        totaltickets: response.data.totaltickets,
                        concessionfee:response.data.concessionfee,
                        subtotal: response.data.subtotal,
                        total: response.data.total,
                    }
                }))
                this.calculateSeats();
            })
            .catch(function (err) {
                if (err)
                    console.log(err);
        })
                
       
    }
    calculateSeats()
    {
        console.log("calculation of seats");
        
        const seats = this.state.ticket.seats;
        console.log(this.state.ticket);
        var length = seats.length;
        var confee = length * 30;
        var platinum = "ABC"
        var gold = "DEFGHIJKL"
        var subtotal = 0;
        var total = 0;

        seats.map(seat => {
            console.log(seat);
            var c = seat.split('');
            if (platinum.indexOf( c[0]) >= 0)
            {
                subtotal = subtotal + 120;
            }
            else if (gold.indexOf( c[0]) >= 0)
            {
                subtotal = subtotal + 100;
            }
            else {
                subtotal += 50;
            }
            total = subtotal + confee;
            console.log("total: " + total);
            console.log("subtotal: " + subtotal);
            console.log("confee:" + confee);
        })

        this.setState({
            total: total,
            subtotal: subtotal,
            confee: confee,
            length:length,
            
        })

        this.updateSeats();
    }
    updateSeats()
    {
        var ticket= {
                ticketId:this.state.ticket.ticketId,
                moviename: this.state.ticket.moviename,
                theatrename: this.state.ticket.theatrename,
                location: this.state.ticket.location,
                print: this.state.ticket.print,
                language: this.state.ticket.language,
                time:this.state.ticket.time,
                date:this.state.ticket.date,  
                seats: this.state.ticket.seats,
                totaltickets: this.state.length,
                concessionfee: this.state.confee,
                subtotal: this.state.subtotal,
                total:this.state.total,
                booked:false,
            }
        axios.post("http://localhost:5000/ticket/update/" + this.props.ticketId, ticket);
    }
    render()
    {
        return (
            <div className="summary">
                <h4>BOOKING SUMMARY</h4>
                
                <p><b>SEATS: </b>
                    {this.state.ticket.seats.map(seat => 
                        <span>{seat},</span>
                    )}
                </p>
                
                <p> <b>Ticket(s): </b>{this.state.length}</p>
                
                <p><b>Convenience fees: </b> <span>{this.state.confee}</span> </p> 
                <hr/>
                <br/>
                <p><b>Sub Total </b> <span>Rs.{this.state.subtotal}</span></p>

                <p><b>Amount Payable </b> <span>Rs.{this.state.total}</span> </p> 
                <hr/>
                <p>By proceeding, I express my consent to complete this transaction</p>

               <Link to={'/payment/'+this.props.ticketId}> <button type="submit">Total: Rs.{this.state.total}  Proceed </button></Link>
            </div>
        );
    }
}

export default Summary;