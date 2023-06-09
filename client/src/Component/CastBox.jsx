import React, { Component } from 'react';

class CastBox extends Component{

    
    render()
    {
        return (
            <div className="castImg">
                <img src={this.props.cast.image} alt=""/>
                <b><p>{ this.props.cast.name}</p></b>
                <p >{ this.props.cast.role}</p>
            </div>
        );
    }
}

export default CastBox;