import React, { Component } from 'react';
import axios from 'axios';
class Summary extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
           ticket: {
                ticketId:props.ticketId,
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
                booked:false,
            }
        }
    }
    componentDidMount()
    {
        const res = async () => {
            try {
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
                
            }
            catch (err)
            {
                console.log(err);
            }
        }
        res();
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
                
                <p> <b>Ticket(s): </b>{this.state.ticket.totaltickets}</p>
                
                <p><b>Convenience fees: </b> <span>{this.state.ticket.concessionfee}</span> </p> 
                <hr/>
                <br/>
               

                <p><b>Amount Payable </b> <span>Rs.{this.state.ticket.total}</span> </p> 
                <hr/>
                <p>By proceeding, I express my consent to complete this transaction</p>

              
            </div>
        );
    }
}

export default Summary;