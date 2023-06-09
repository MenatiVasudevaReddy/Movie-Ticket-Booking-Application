import React, { Component } from 'react';

class  Legend extends Component {
    
    render() {
        return (
            <div className="legend">
                Sold<button id="sold">{this.props.bcount}</button>
                Available<button>{this.props.acount}</button>
                Selected<button id="selected">{this.props.count}</button>
            </div>
        );
    }
}

export default Legend;