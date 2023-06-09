import React, { Component } from 'react';
import SeatRow from './SeatRow';
import Legend from './Legend';
import axios from 'axios';
class Seats extends Component{

    constructor(props)
    {
        super(props);
        
        this.updateSeatsAdd = this.updateSeatsAdd.bind(this);
        this.updateSeatsRemove = this.updateSeatsRemove.bind(this);
        this.getClass = this.getClass.bind(this);
        this.selectseat = this.selectseat.bind(this);

        this.state = {
            seats: [
                ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B',
                'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B',],
                
                ['A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'A', 'B', 'A', 'A', 'A', 'A', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'A', 'A', 'B', 'A', 'A', 'A', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'A', 'A', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
                
                ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'A',
                    'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
            ],
            count: 0,
            bcount: 4,
            acount:276,
            seatrow: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N',],
            seatrowno:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],
            seatleft: [0,1,2,3,4,5,6,7,8,9],
            seatright: [10,11, 12, 13, 14, 15, 16, 17, 18, 19],
            selectedseats: [],
            
        };
    }
    componentDidMount()
    {
        console.log(this.props.theatrename);
        axios.get("http://localhost:5000/seat/" + this.props.theatrename)
            .then(response => {
                this.setState({ seats: response.data.seats });
            })
            .catch(function (err) {
                if (err)
                    console.log(err);
            });
    }
    //updating seat count, when a seat is selected
    updateSeatsAdd(row,seatno)
    {
        let count = this.state.count;
        let ac = this.state.acount;
        count++;
        ac--;
        this.setState({ count: count,acount:ac });
    }

    //updating seat count, when a seat is deselected
    updateSeatsRemove(row,seatno)
    {
        let count = this.state.count;
        let ac = this.state.acount;
        count--;
        ac++;
        this.setState({ count: count,acount:ac });
    }
    
    //assigning selected seats to state
    updateSelectedSeats(seats)
    {
        this.setState({ selectedseats: seats });
    }

    //Assigning class to seat
    getClass(row, i) {
        if (this.state.seats[row][i] === 'B')
        {
            
            return "sold";
        }
        else if (this.state.seats[row][i] === 'S')
        {
            return "selected";
        }   
        else
        { 
            return "seat"; 
        }     
    }
    selectseat(rowid,row,i)
    {
         
        const vals = this.state.seats.slice();
        if (vals[row][i] === 'B')
        {
            
            return;
        }
            
        if (vals[row][i] === 'A' ? vals[row][i] = 'S' : vals[row][i] = 'A');
        if (vals[row][i] === 'S')
        {
            this.setState({ seats: vals });
            this.updateSeatsAdd(rowid, i + 1);
            var s = i + 1;
            var seat = rowid + s;
            let seats = this.state.selectedseats;
            seats[this.state.count] = seat;
            this.setState({ selectedseats: seats })
        }
        else {
            this.setState({ seats: vals });    
            this.updateSeatsRemove(rowid, i + 1); 
            var s = i + 1;
            var seat = rowid + s;
            let seats = this.state.selectedseats;
            var index = seats.indexOf(seat);
            if (index !== -1)
            {
                seats.splice(index, 1);
                this.setState({ selectedseats: seats })
            }
        } 
        this.props.onseatselect(this.state.selectedseats);
    }
    render()
    {
        return (
            <div className="Seats">
                <Legend count={this.state.count} acount={this.state.acount} bcount={this.state.bcount}/>
                    <div className="left">
                    {this.state.seatrowno.map(rowno =>
                        <div>
                            <span className='rowid'>{this.state.seatrow[rowno]}</span>
                            <SeatRow seats={this.state.seatleft}
                            onGetClass={this.getClass}
                            onSelectSeat={this.selectseat}
                            rowid={this.state.seatrow[rowno]}
                            rowno={rowno}
                            key={rowno}>
                            
                            </SeatRow>
                        </div>
                        )}
                    </div>

                    <div className="right">
                    {this.state.seatrowno.map(rowno =>
                        <div>
                            <SeatRow seats={this.state.seatright}
                            onGetClass={this.getClass}
                            onSelectSeat={this.selectseat}
                            rowid={this.state.seatrow[rowno]}
                            rowno={rowno}
                            key={rowno}>  
                            </SeatRow>
                            <span className='rowidr'>{this.state.seatrow[rowno]}</span>
                        </div>
                        )}
                        
                    </div>
                </div>
        );
    }
}

export default Seats;