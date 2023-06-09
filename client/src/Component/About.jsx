import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            description: "For the first time in the cinematic history of SpiderMan,our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero "
        };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/movie/" + this.props.movie)
            .then(response => {
                this.setState({
                description:response.data.description,
            })
            })
        .catch(function (error) {
        console.log(error);
      })
    }
    render() {
        return (
            <div className="about">
                <h2>Plot</h2>
                <p>{this.state.description}</p>
            </div>
        );
    }
}
export default About;