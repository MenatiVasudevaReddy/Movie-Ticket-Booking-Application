import React, { Component } from "react";

class Payment extends Component {
    constructor(props)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMonth = this.onChangeMonth.bind(this);
        this.onChangeCCV = this.onChangeCCV.bind(this);
        this.onChangeCardNo = this.onChangeCardNo.bind(this);

        this.state = {
            name: "",
            cardNo: "",
            month: "",
            year: "",
            ccv: "",    
        }

    }
    onChangeCardNo(e)
    {
        this.setState({ cardNo: e.target.value })
    }
    onChangeName(e)
    {
        this.setState({ name: e.target.value })
    }
    onChangeMonth(e)
    {
        this.setState({ month: e.target.value })
    }
    onChangeYear(e)
    {
        this.setState({ year: e.target.value })
    }
    onChangeCCV(e)
    {
        this.setState({ ccv: e.target.value })
    }
    onSubmit(e)
    {
        e.preventDefault();
        window.location = '/paymentotp/' + this.props.ticketId;
    }
    render() {
        return (
            <div className="payment">
                <form onSubmit={this.onSubmit}>
            
                    <h2>Card Details</h2>
                    <input type="text"
                        onChange={this.onChangeCardNo}
                        value={this.state.cardNo}
                        placeholder="Card Number" />
                    <br />

                    <input type="text"
                        onChange={this.onChangeName}
                        value={this.state.name}
                        placeholder="Name on the Card" />
                    <br />

                    <input type="text"
                        id="small"
                        onChange={this.onChangeMonth}
                        value={this.state.month}
                        placeholder="MM" />
                    
                    <input type="text"
                        id="small"
                        onChange={this.onChangeYear}
                        value={this.state.year}
                        placeholder="YY" />
                    <br />

                    <input type="password"
                        onChange={this.onChangeCCV}
                        value={this.state.ccv}
                        placeholder="CCV" />
                    <br />
    	            <button type="submit" value="submit">Make Payment</button>

                </form>
        
            </div>
        );
    }
}
export default Payment;