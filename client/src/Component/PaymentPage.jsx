import React, { Component } from "react";
import axios from 'axios';
import Summary1 from "./Summary1";
import Payment from "./Payment";

class PaymentPage extends Component{

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
                booked:false,
            }
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:5000/ticket/" + this.props.match.params.ticketId)
            .then(response => {
                this.setState(prevState => ({
                    ticket: {
                        ...prevState.ticket,
                        movie : response.data.moviename,
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
                
            })
        .catch(function (err) {
                console.log(err);
        })
    }
    render()
    {
        return (
            <div>
                <Payment ticketId={this.props.match.params.ticketId} />
                <Summary1 ticketId={this.props.match.params.ticketId}/>
            </div>
        );
    }
}

export default PaymentPage;