import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";
import {AuthContext} from "../../components/context/AuthContext"


const Login = () => {
  //start

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if(res.data.isAdmin){
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");

                          }
      else{
        dispatch({type:"LOGIN_FAILURE",payload:{message:"Invalid credentials"}})
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: {message:"Invalid"} });
    }
  };
  console.log(user);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="">
        <div className="mx-14 mt-36 mb-5 grid grid-cols-1 sm:grid-cols-2">
          {/*<div className="flex justify-center items-center m-3">
            <button className="w-48 flex justify-center items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-md text-xs">
              <img
                src={require("../../components/assets/")}
                alt="Google"
                className="h-3 w-3 mr-2"
              />
              Sign Up with Google
            </button>
          </div>
          <div className="flex justify-center items-center m-3">
            <button className="w-48 flex justify-center items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-md text-xs">
              <img
                src={require("../Assets/Facebook.png")}
                alt="Facebook"
                className="h-3 w-3 mr-2"
              />
              Sign Up with Facebook
            </button>
  </div>*/}
        </div>

       
        <div className="flex flex-col">
          <input
            type="text"
            className="mx-14 p-3 outline-none border border-transparent border-b-blacky-medium hover:border-b-evergreen duration-500"
            placeholder="username"
            id="username"
            onChange={handleChange}
          />
          <input
            type="password"
            className="mx-14 p-3 outline-none border border-transparent border-b-blacky-medium hover:border-b-evergreen duration-500"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <div className="mx-14 my-5">
          <button
            disabled={loading}
            onClick={handleClick}
            className=" hover:bg-evergreen duration-500 bg-blacky-dark text-whiteglow w-full rounded-md p-2 my-5"
          >
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>

        <p className="mx-14">
          New here?
          <Link className="" to="/signup">
            Signup
          </Link>
        </p>
      </div>

      <div className="bg-evergreen flex justify-center items-center">
        <img src={require("../../Assets/profile.jpg")} alt="" className="" />
      </div>
    </div>
  );
};
export default Login;
