import React, { Component } from 'react';

class CrewBox extends Component{

    render()
    {
        return (
                <div className="castImg">
                    <img src={this.props.crew.image} alt=""/>
                    <b><p>{this.props.crew.name}</p></b>
                    <p >{ this.props.crew.role}</p>
                </div>
        );
    }
}

export default CrewBox;