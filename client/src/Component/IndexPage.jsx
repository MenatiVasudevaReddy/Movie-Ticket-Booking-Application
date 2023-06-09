import React, { Component } from 'react';

class IndexPage extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            email:"",
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }
    onChangeEmail(e)
    {
        this.setState({ email: e.target.value })
        
    }
    onSubmit(e)
    {
        console.log("email sent");
        e.preventDefault();
        const email = this.state.email;
        var otp = Math.floor(Math.random() * 999999);
        var userid = "MNU"+Math.floor(Math.random() * 999);
        var message = "This is your One time password " + otp + " for MoviesNow Login";
        var user = {
            userid: userid,
            otp:otp
        }
        //axios.post("http://localhost:5000/user/add", user);
       
        window.location = '/otp/'+userid;
    }
    render()
    {
        return (
            <div >
                <center>
                    <div className="log"> 
                        <form onSubmit={this.onSubmit}>    
                            <h2>Enter your Email </h2>
                            <input type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChangeEmail} /><br /> 
                            
                             <button  type="submit" value="submit">
                                    Send OTP
                            </button>
     
                        </form> 
                    </div>
                </center>
            </div>
            
        );
    }
}

export default IndexPage;