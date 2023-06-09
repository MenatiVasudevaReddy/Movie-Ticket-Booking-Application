
import './App.css';
import './movie.css';
import { Route } from 'react-router-dom';
import Home from './Component/Home';
import Header from './Component/Header';
import MoviePage from './Component/MoviePage';
import Allmovies from './Component/Allmovies';
import TheatrePage from './Component/TheatrePage';
import TheatreHallPage from './Component/TheatreHallPage';
import BookingSummary from './Component/BookingSummary';
import OTP from './Component/Otp';
import PaymentPage from './Component/PaymentPage';
import PaymentOtp from './Component/PaymentOtp';
import TicketPage from './Component/TicketPage';
import IndexPage from './Component/IndexPage';
import MovieNotFound from './Component/MovieNotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route exact path="/"><IndexPage /></Route>
      <Route path="/otp/:userid" render={ (props)=> <OTP {...props} /> } />
      <Route path="/home"><Home/></Route>
      <Route path="/movie/:id" render={(props) => <MoviePage {...props}/>}/>
      <Route path="/movies"><Allmovies /></Route>
      <Route path="/movienotfound"><MovieNotFound/></Route>
      <Route path="/theaters/:id"  render={(props) => <TheatrePage {...props}/>}/>
      <Route path="/theatrehall/:ticketId/:time" render={(props) => <TheatreHallPage {...props}/>}/>
      <Route path="/bookingsummary/:ticketId" render={(props) => <BookingSummary {...props}/>}/>
      <Route path="/payment/:ticketId" render={(props) => <PaymentPage {...props}/>}/>
      <Route path="/paymentotp/:ticketId" render={(props) => <PaymentOtp {...props}/>}/>
      <Route path="/ticket/:ticketId" render={(props) => <TicketPage {...props}/>}/>

    </div>
  );
}

export default App;
