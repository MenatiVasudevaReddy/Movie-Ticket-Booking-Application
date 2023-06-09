import React, { Component } from "react";
import axios from 'axios';
class Otp extends Component{

    constructor(props)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeOTP = this.onChangeOTP.bind(this);

        this.state = {
            otpUser: "",
            otp: "",
            warning:"",
        }

    }
    componentDidMount()
    {
        axios.get("http://localhost/user/" + this.props.match.params.userid)
            .then(response => {
            this.setState({otp:response.data.otp})
        })
    }
    onChangeOTP(e)
    {
        this.setState({otpUser:e.target.value});
    }
    onSubmit(e)
    {
        e.preventDefault();
        if (this.state.otpUser === "123456")
        {
            var user = {
                userid: this.props.match.params.userid,
                otp:"",
            }
            axios.post("http://localhost:5000/user/update/" + this.props.match.params.userid, user);
            window.location = '/home';
        }
            
        else
            this.setState({warning:"Invalid OTP"})
    }
    render()
    {
        return (
            <div>
                <center>
            	    <div class="log">
                        <h2>Enter your OTP</h2>
                        <form onSubmit={this.onSubmit}>

                            <input type="password"
                                    placeholder="6-Digit OTP"
                                    onChange={this.onChangeOTP}
                                    value={this.state.otpUser}/><br />
                            
                            <button type="submit" value="submit">
                                Verify OTP
                            </button><br />
                            
                            <button type="submit"
                                class="resend"
                                form="resend"
                                id="resend">
                                Resend OTP
                            </button>

                        </form>  
                        <p>{this.state.warning}</p>
                    </div>
                </center>
            </div>
        );
    }
}

export default Otp;