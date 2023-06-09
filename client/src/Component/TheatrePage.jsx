import React, { Component } from 'react';
import DateBar from './DateBar';
import TheatreGrid from './TheatreGrid';
import Footer from './Footer';

class TheatrePage extends Component{

    constructor(props) {
        super(props);
        this.assignMonth = this.assignMonth.bind(this);
        this.checkDay = this.checkDay.bind(this);
        this.checkMonth = this.checkMonth.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getdate = this.getdate.bind(this);
        var date = new Date();

        this.state = {
            day:date.getDate(),
            month: this.assignMonth(date.getMonth() + 1),
            movie:"",
            dates: [
                {
                    day: date.getDate(),
                    month: this.assignMonth(date.getMonth() + 1),
                    id:0,
                },
                {
                    day: this.checkDay(date.getDate() + 1, date.getMonth() + 1),
                    month: this.assignMonth(this.checkMonth(date.getDate() + 1, date.getMonth() + 1)),
                    id:1,
                },
                {
                    day: this.checkDay(date.getDate() + 2, date.getMonth() + 1),
                    month: this.assignMonth(this.checkMonth(date.getDate() + 2, date.getMonth() + 1)),
                    id:2,
                },
                {
                    day: this.checkDay(date.getDate() + 3, date.getMonth() + 1),
                    month: this.assignMonth(this.checkMonth(date.getDate() + 3, date.getMonth() + 1)),
                    id:3,
                },
                {
                    day: this.checkDay(date.getDate() + 4, date.getMonth() + 1),
                    month: this.assignMonth(this.checkMonth(date.getDate() + 4, date.getMonth() + 1)),
                    id:4,
                },
            ],
            selectedDate:"",
            datess: ["datechosen", "0", "0", "0", "0"],
            
        }
        
    }
    checkDay(day, month) {
        var mon = {
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
        }
        if (day > mon[month])
        {
            if (month === 12)
                return 1;
            else
                return 1;
        }
        else
            return day;
    }
    checkMonth(day, month) {
        var mon = {
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
        }
        if (day >= mon[month])
        {
            if (month === 12)
                return 1;
            else
                return month + 1;
        }
        else
            return month;
    }
    assignMonth(month) {
       var  mon = {
            1: "JAN",
            2: "FEB",
            3: "MAR",
            4: "APR",
            5: "MAY",
            6: "JUN",
            7: "JUL",
            8: "AUG",
            9: "SEP",
            10: "OCT",
            11: "NOV",
            12: "DEC"
        }

        return mon[month]
    }

    handleClick(date,day,month)
    {
         
        var da = ["0", "0", "0", "0", "0"];
        da[date] = "datechosen";
        
        var selectdate = day + "," + month;
        this.setState({ datess: da,selectedDate:selectdate });
    }
    getdate(i)
    {
        return this.state.datess[i];
    }
    componentDidMount()
    {
        
        var setdate = this.state.dates[0].day + "," + this.state.dates[0].month;
        this.setState({ selectedDate: setdate });
    }
    render()
    {    
        return (
            <div>
                <DateBar Dates={this.state.dates}
                    onClick={this.handleClick}
                    getId={this.getdate}>
                </DateBar>

                <TheatreGrid movie={this.props.match.params.id}
                    date={this.state.selectedDate}>
                </TheatreGrid>
                
                <Footer/>
            </div>
        );
    }

}

export default TheatrePage;