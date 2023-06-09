import React, { Component } from 'react';
import axios from 'axios';
import CrewBox from './CrewBox';
import img1 from './Images/cast & crew/JonWatts.jfif';
import img2 from './Images/cast & crew/KevinFiege.jfif';
import img3 from './Images/cast & crew/ErikSommers.jfif'
class CrewRow extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Crew: {
                moviename: "Sample",
                crew: [
                    {
                        name: "Jon watts",
                        role: "Director",
                        image:img1,
                    },
                    {
                        name: "Erik Sommers",
                        role: "Writer",
                        image:img3
                    },
                    {
                        name: "Kevin Fiege",
                        role: "Producer",
                        image:img2
                    },
                ]
            }
        };
    }
    componentDidMount()
    {
        axios.get("http://localhost:5000/crew/" + this.props.movie)
            .then(response => {
            this.setState({Crew:response.data})
            })
            .catch(function (err)
            {
                console.log(err);
        })
    }
    render() {
        return (
            <div className="castrow">
                <h2>Crew</h2>
                {this.state.Crew.crew.map(crew => 
                    <CrewBox crew={crew} key={crew.name}/>
                )}
            </div>
        );
    }
}
export default CrewRow;