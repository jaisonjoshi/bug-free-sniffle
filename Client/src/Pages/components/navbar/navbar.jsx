import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar';
import { Button } from 'flowbite-react/lib/cjs/components/Button';

const NavbarTest = () => {
  //const { user } = useContext(AuthContext);
  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  //logout code fetching
  const handleClick = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGOUT" });
      try {
        const res = await axiosInstance.get("/auth/logout");
        localStorage.removeItem("user");
        if(res){
        
        navigate("/");
  
                            }
        
      } catch (err) {
        dispatch({ type: "LOGOUT", payload: {message:"logged out"} });
      }
    };
    console.log(user);


    const [stickyClass, setStickyClass] = useState('sm:bg-transparent py-10 fixed');

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);

    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 200 ? setStickyClass('fixed top-0 left-0 right-0 py-4  bg-white shadow-md'): setStickyClass('sm:bg-transparent py-10 fixed');
  
      }
    };


  return (
    <div>
    <Navbar className={` w-full z-50 top-0 left-0  px-8 transition-all duration-500 ease-in-out ${stickyClass}`}
fluid={true}

>
<Navbar.Brand href="https://flowbite.com/">
<img src={require('../../Assets/TrouvaillerGreen .png')}
                className="mr-3 h-6 sm:h-9 pl-10"
                alt="Trouvailler Logo"
            />

</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse>
<div className="flex md:order-2 gap-7 ml-20 items-center">
{ user?<div><span>{user.username}</span>
        <button className="bg-whiteglow text-blacky-dark text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow" onClick={handleClick}>Logout</button></div>:(
        <div className="md:flex my-4">
           <button className="bg-whiteglow text-blacky-dark text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow">
            <Link className="" to="/login" >Login</Link>
            </button>

            <button className="bg-evergreen text-blacky-dark text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow">
            <Link className="" to="/signup">Signup</Link>
            </button>
          </div>)
}

</div>

<Navbar.Link href="/" 
                class={`p-3 sm:p-0 text-lg text-blacky-dark hover:text-evergreen duration-500`}>
                Home
            </Navbar.Link>
            <Navbar.Link href="/bid-status"
                class={`p-3 sm:p-0 text-lg text-blacky-dark hover:text-evergreen duration-500`}>
                My bids
            </Navbar.Link>
        {/*     <Navbar.Link href="/"
                class={`p-3 sm:p-0 text-lg text-blacky-dark hover:text-evergreen duration-500`}>
                About
            </Navbar.Link> */}
            <Navbar.Link href="/"
                class={`p-3 sm:p-0 text-lg text-blacky-dark hover:text-evergreen duration-500`} >
                Contact
            </Navbar.Link>
</Navbar.Collapse>
</Navbar>
    
</div>
  )
}

export default NavbarTest