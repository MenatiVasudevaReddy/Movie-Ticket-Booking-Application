import React, { Component } from 'react';

class Seat extends Component {
    
    render() {
        return (
            <button id={this.props.className}
                onClick={() => this.props.onClick()} >
                {this.props.sid+1}
            </button>
        );
    }
}

export default Seat;