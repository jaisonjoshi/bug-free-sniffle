import React from 'react'
import { Link } from "react-router-dom";

const Signup = () => {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="">

                <h1 className="text-center m-4 font-bold text-2xl">Create an Account</h1>

                <div className="mx-14 mt-10 mb-5 grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex justify-center items-center m-3">
                        <button className="w-48 flex justify-center items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-md text-xs">
                            <img src={require('../Assets/Google.png')} alt="Google" className="h-4 w-4 mr-2" />
                            Sign Up with Google
                        </button>
                    </div>
                    <div className="flex justify-center items-center m-3">
                        <button className="w-48 flex justify-center items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-md text-xs">
                            <img src={require('../Assets/Facebook.png')} alt="Facebook" className="h-4 w-4 mr-2" />
                            Sign Up with Facebook
                        </button>
                    </div>
                </div>

                <p className="text-center text-blacky-light text-sm m-2">- OR -</p>

                <div className="flex flex-col">
                    <input type="text" className="mx-14 p-3 outline-none border border-t-transparent border-l-transparent border-r-transparent focus:ring-0 focus:ring-offset-0 border-b-blacky-medium hover:border-b-evergreen duration-500" placeholder="Your Name" required />
                    <input type="email" className="mx-14 p-3 outline-none border border-t-transparent border-l-transparent border-r-transparent focus:ring-0 focus:ring-offset-0 border-b-blacky-medium hover:border-b-evergreen duration-500" placeholder="E-mail" required />
                    <input type="tel" className="mx-14 p-3 ooutline-none border border-t-transparent border-l-transparent border-r-transparent focus:ring-0 focus:ring-offset-0 border-b-blacky-medium hover:border-b-evergreen duration-500" placeholder="Mobile Number" required />
                    <input type="password" className="mx-14 outline-none border border-t-transparent border-l-transparent border-r-transparent focus:ring-0 focus:ring-offset-0 border-b-blacky-medium hover:border-b-evergreen duration-500" placeholder="Create Password" required />
                </div>

                <div className="mx-14 my-5">
                    <button className=" hover:bg-evergreen duration-500 bg-blacky-dark text-whiteglow w-full rounded-md p-2 my-5">Create Account</button>
                </div>

                <p className="mx-14">Already have an account?
                    <Link className="" to="/Login">Login</Link></p>
            </div>

            <div className="bg-evergreen flex justify-center items-center">
                <img src={require('../Assets/Trouvailler.png')} alt="" className="" />
            </div>
        </div>
    )
}
export default Signup