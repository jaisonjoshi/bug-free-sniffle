import React from 'react'
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <header class="text-blacky-light body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img src={require('../../Assets/TrouvaillerGreen .png')} alt="" className="px-14" />
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="text-sm mr-5 text-blacky-light hover:text-evergreen duration-500"><Link className="" to="/">Home</Link></a>
          <a class="text-sm mr-5 text-blacky-light hover:text-evergreen duration-500"><Link className="" to="/bid-status">My bids</Link></a>
          <a class="text-sm mr-5 text-blacky-light hover:text-evergreen duration-500"><Link className="" to="/">About Us</Link></a>
          <a class="text-sm mr-5 text-blacky-light hover:text-evergreen duration-500"><Link className="" to="/">Contact</Link></a>
        </nav>
        <div className="md:flex my-4">
          <input type="text" className="w-20 bg-whiteglow outline-none text-blacky-dark text-sm border border-graydust-normal duration-500 px-4 py-2 mx-4 rounded-md" placeholder="Search" />
         <button className="bg-whiteglow text-blacky-dark text-sm border border-none shadow-lg shadow-gray-200 duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow">
            <Link className="" to="/login">Login</Link>
          </button>

          <button className="bg-evergreen text-blacky-dark text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow">
            <Link className="" to="/signup">Signup</Link>
          </button>
          </div>
      </div>
    </header>
  )
}

export default navbar