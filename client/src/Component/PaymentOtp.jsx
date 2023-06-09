import React ,{Component} from "react";

class PaymentOtp extends Component{
    constructor(props) {
        super(props);
        this.onChangeOTP = this.onChangeOTP.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            ticketId: this.props.match.params.ticketId,
            otpUser :"",
        }
    }
    onChangeOTP(e)
    {
        this.setState({ otpUser: e.target.value });
    }
    onSubmit(e)
    {
        e.preventDefault();

        window.location = "/ticket/"+this.state.ticketId
    }
    render()
    {
        return (
            <div className="payment1">
                <center><h2> Enter the OTP </h2></center> 
                    <form onSubmit={this.onSubmit}>
                        <input type="password"
                            onChange={this.onChangeOTP}
                            value={this.state.otpUser}
                            placeholder="6-Digit OTP" />
                        <br/>
                       <button type="submit" value="submit">Enter</button>
                    </form>
                    
                    <button id="resend1">Resend OTP </button>
            </div>
        );
    }
}

export default PaymentOtp;
