


import {
  BrowserRouter,
  Routes,
  Route,
  Ridirect,
  Switch,
}from "react-router-dom";
import Bidform from "./Pages/bidform/bidform.jsx";
import Home from "./Pages/home/Home.jsx";
import Login from "./Pages/login/login.jsx";
import Signup from "./Pages/signup/signup.jsx";
import List from "./Pages/list/list.jsx";
import IntroToBid from "./Pages/Bid/IntroBid.jsx";
import BidStatus from "./Pages/Bid/BidStatus.jsx";
import Package from "./Pages/DetailViews/Package.jsx";
import Hotel from "./Pages/DetailViews/Hotel.jsx";
import Review from "./Pages/rev/rev.jsx";
import Destination from "./Pages/trending/trending.jsx";
import Offers from "./Pages/offers/offers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/bidform" element={<Bidform/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/what-is-bid" element={<IntroToBid/>}/>
        <Route path="/bid-status" element={<BidStatus/>}/>
        <Route path="/package" element={<Package/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
        <Route path="/rev" element={<Review/>}/>
        <Route path="/trending" element={<Destination/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/list/package:id" element={<Package/>}/>
        <Route path="/list/hotel:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
        

    
