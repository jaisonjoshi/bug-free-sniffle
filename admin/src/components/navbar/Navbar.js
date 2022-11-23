import './navbar.scss';
import Logo from '../assets/Green.png'
import profile from '../assets/i.png'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useContext,useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from "react-router-dom"
const Navbar = () => {

    const { user, loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    //logout code fetching
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        try {
          const res = await axios.get("/auth/logout");
          localStorage.removeItem("user");
          if(res){
          
          navigate("/login");
    
                              }
          
        } catch (err) {
          dispatch({ type: "LOGOUT", payload: {message:"logged out"} });
        }
      };
      console.log(user);
    //
    

    return(
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={Logo} alt="" className="nav-logo" /> 

                </Link>
                <h3>Dashboard</h3>
            </div>
            <div className='nav-profile'>
                <img src={profile} alt="" className="nav-profile-icon" />
               
            </div>
           
            <button onClick={handleClick}>Logout</button>
    
    
            
            
        </div>
    )
}


export default Navbar