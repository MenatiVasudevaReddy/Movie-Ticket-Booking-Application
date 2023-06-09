import React, { Component } from 'react';
import axios from 'axios';
import CastBox from './CastBox';
import img1 from './Images/cast & crew/Andrew garfield.jpg';
import img2 from './Images/cast & crew/ben cumberbatch.jfif';
import img3 from './Images/cast & crew/tom holland.jfif';
import img4 from './Images/cast & crew/tobey maguire.jfif';

class CastRow extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Cast: {
                moviename: "Sample",
                cast: [
                    {
                        name: "Tom Holland",
                        role: "Peter Parker",
                        image:img3,
                    },
                    {
                        name: "Tobey Maguire",
                        role: "Peter Parker",
                        image:img4,
                    },
                    {
                        name: "Andrew Garfield",
                        role: "Peter Parker",
                        image:img1,
                    },
                    {
                        name: "Benedict",
                        role: "Docter Strange",
                        image:img2
                    },
                ]
            }
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:5000/cast/" + this.props.movie)
            .then(response => {
            this.setState({Cast:response.data})
            })
            .catch(function (err)
            {
                console.log(err);
            })
        
    }
    render() {
        return (
            <div className="castrow">
                <h2>Cast</h2>
                {this.state.Cast.cast.map(cast => 
                    <CastBox cast={cast} key={cast.name}/>
                )}
            </div>
        );
    }
}
export default CastRow;