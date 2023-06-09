import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class TheatreRow extends Component{

    constructor(props)
    {
        super(props);
        var date = new Date();
        this.state = {
            theatrename: props.Theatre.theatrename,
            movie: props.movie,
            ticket: {
                ticketId: "MNT"+10+Math.floor(Math.random()*999),
                moviename: props.movie,
                theatrename: props.Theatre.theatrename,
                location: props.Theatre.location,
                print: "",
                language:"",
                time: "",
                date: props.date+","+date.getFullYear(),  
                seats: [],
                totaltickets: 0,
                concessionfee: 0,
                subtotal:0,
                total:0,
                booked:false,
            }
        };
    }
    componentDidMount()
    {
        axios.get("http://localhost:5000/movie/" + this.props.movie)
            .then(response => {
                this.setState(prevState => ({
                    ticket: {
                        ...prevState.ticket,
                        print: response.data.print,
                        language:response.data.language,
                    }
                }))
            })
            .catch(function (err) {
                if (err)
                    console.log(err);
        })
        setTimeout(() => {
            axios.post("http://localhost:5000/ticket/add", this.state.ticket);
        }, 1000);
        
    }
    render() {
       
        return (
            <div className="theatreRow">
        
                <h4>{this.props.Theatre.theatrename},{this.props.Theatre.location}</h4>
                {
                    this.props.Theatre.timeslots.map(time =>
                        <Link to={'/theatrehall/'+this.state.ticket.ticketId+'/'+time}>
                            <button name="theatre" key={time}  >{time}</button>
                        </Link>
                        )
                }
                         
            </div>
        );
    }
}

export default TheatreRow;