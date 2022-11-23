import React from "react";
import Footer from "../../components/Footer/Footer";
import Headerimg from "../../Assets/Group.jpg";
import { Link } from "react-router-dom";

import "./home.scss";
import HomeBid from "../../components/homeBid/HomeBid";
import profile from "../../Assets/profile.jpg";
import { AuthContext } from "../../components/context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  //logout code fetching
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    try {
      const res = await axios.get("/auth/logout");
      localStorage.removeItem("user");
      if (res) {
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGOUT", payload: { message: "logged out" } });
    }
  };
  console.log(user);

  return (
    <div>
      {/* Header */}
      <div className="header">
        <img src={Headerimg} alt="" />
        <div>
          <Link to="/user">
            <div className="profile-box">
              <div className="profilename">
                <span>Logined as</span>
                <h3>Hotel</h3>
              </div>
              <img src={profile} />
            </div>
          </Link>
          <div className="">
            <button
              class="login-btn bg-whiteglow text-blacky-dark text-sm border border-none duration-500 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <HomeBid />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
