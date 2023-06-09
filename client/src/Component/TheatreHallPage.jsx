import React, { Component } from "react";
import axios from 'axios';
import MovieBar from './MovieBar';
import TheatreHall from "./TheatreHall";

class TheatreHallPage extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            selectedSeats: [],
            ticket: {
                ticketId:this.props.match.params.ticketId,
                moviename: "def",
                theatrename: "default",
                language:"",
                print:"",
                location: "",
                time:this.props.match.params.time,
                date: "",  
                seats: [],
                totaltickets: 0,
                concessionfee: 0,
                subtotal: 0,
                total: 0,
                booked:false,
            }
        }
        this.selectedSeat = this.selectedSeat.bind(this);
        this.booked = this.booked.bind(this);
    }
    componentDidMount() {
        
        const res = async () => {
            
            try {
                const response = await axios.get("http://localhost:5000/ticket/" + this.props.match.params.ticketId);
                this.setState(prevState => ({
                        ticket: {
                            ...prevState.ticket,
                            moviename : response.data.moviename,
                            theatrename : response.data.theatrename,
                            location : response.data.location,
                            date: response.data.date,
                            print: response.data.print,
                            language:response.data.language,
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
    selectedSeat(seats)
    {
        this.setState({ selectedSeats: seats });
        this.setState(prevState => ({
            ticket: {
                ...prevState.ticket,
                seats: this.state.selectedSeats,
            }
        }))
    }
    
    booked()
    {
        axios.post("http://localhost:5000/ticket/update/" + this.state.ticket.ticketId, this.state.ticket);
        console.log(this.state.ticket);
    }
    render()
    {
        return (
            <div>
                <MovieBar 
                    theatre={this.state.ticket.theatrename}
                    movie = {this.state.ticket.moviename}
                    time={this.state.ticket.time}
                    ticketId={this.state.ticket.ticketId}
                    print={this.state.ticket.print}
                    onBook={this.booked}/>
                
                <TheatreHall
                    theatrename={this.state.ticket.theatrename}
                    onSelectedSeats={this.selectedSeat} />
            </div>
        );
    }
}

export default TheatreHallPage;
