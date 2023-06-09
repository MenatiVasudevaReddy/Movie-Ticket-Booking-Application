import React, { Component } from 'react';
import axios from 'axios';
import Ticket from './Ticket';
import Footer from './Footer';
import NavBar from './NavBar';

class TicketPage extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            ticket: {
                ticketId:this.props.match.params.ticketId,
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
            },
            seats: {
                theatrename:"",
                theatreSeats: []
            },
            
            
        }
        this.updateSeats = this.updateSeats.bind(this);
    }
    componentDidMount()
    {
        
        axios.get("http://localhost:5000/ticket/" + this.state.ticket.ticketId)
            .then(response => {
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
                        booked:true
                    }
            }))
                this.setState(prevState => ({
                    seats: {
                        ...prevState.seats,
                        theatrename:response.data.theatrename,
                    }
                }))
                axios.post("http://localhost:5000/ticket/update/" + this.state.ticket.ticketId, this.state.ticket)
                    .then(
                         this.updateSeats()  
                )
        })
            .catch(function (err) {
                if (err)
                    console.log(err);
            })

        
    }
    updateSeats()
    {
       
        axios.get("http://localhost:5000/seat/"+this.state.ticket.theatrename)
            .then(response => {
                this.setState({
                theatreSeats:response.data.seats
                })

                    this.state.ticket.seats.map(seat => {
                        var seatss = this.state.theatreSeats;
                        var seatno = seat.split("");
                        var row = seatno[0];
                        var no = "";
                        if (seatno.length > 2)
                        {
                            no = seatno[1] + seatno[2];
                        }
                        else
                        {
                            no = seatno[1];   
                        }
                        const rows ="ABCDEFGHIJKLMNO";
                        var r = rows.indexOf(row);
                        seatss[r][no] = "B";
                        console.log(seatss);
                        this.setState(prevState => ({
                            seats: {
                                ...prevState.seats,
                                theatreSeats: seatss,
                            }
                        }))
                        
                    })
                
                axios.post("http://localhost:5000/seat/update/"+this.state.theatrename,this.state.seats);
            })
            .catch(function (err) {
                if (err)
                    console.log(err);
            })
            
            axios.delete("http://localhost:5000/ticket");
    }
    render()
    {
        
        return (
            <div >
                <NavBar />
                <h2>Your Booking has Confirmed</h2>
                <center>
                    <Ticket ticketId={this.props.match.params.ticketId} />
                </center>
                <Footer/>
            </div>
        );
    }
}

export default TicketPage;