import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './reviews.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import profile from '../../components/assets/profile.jpg'
import axios from 'axios';
const Reviews =() => {
    const [reviews, setReviews] = useState([]);
    const {data, loading, err, reFetch} = useFetch("/reviews");
    useEffect(()=> {
         setReviews(data);
    }, [data]);
  
    const navigate = useNavigate();
    const handleReviewUpdate = (id) => {
        navigate(`/reviews/${id}/update`);
    }
    const handleReviewDelete = async (id) => {
        try{
            await axios.delete(`/reviews/${id}`);
            reFetch("/reviews")
            
        }catch(err){
            console.log(err)
        }
    }
    


    return(
        <div className="reviews">
            <Navbar />
            <Sidenav />

            <div className="reviews-body">
                    <div className="reviews-head">
                        <h2>Add, Update or delete your reviews</h2>
                        <Link to="/reviews/newreview" className='review-btn'>Create a review</Link>
                    </div>
                    <div className="review-container">
                        {loading ? ("loading"):(
                            reviews && reviews.map((rev) => (
                                <div className="review-card" key={rev._id} >
                                    <div className="review-img">
                                        <div className="review-img-container">
                                            <img src={profile} alt="" className='review-img-img'/>
                                        </div>
                                    </div>
                                    <div className="review-txt">
                                        <p>{rev.reviewnote}</p>
                                    </div>
                                    <div className="review-footer">
                                        <span className='author'>{rev.author} </span><span className='authorde'>{rev.place}</span>
                                    </div>
                                    <div className="review-admin">
                                        <div className="review-admin-btn-grp">
                                            <button className='review-btn'onClick={() => handleReviewUpdate(rev._id)}>Update</button>
                                            <button className='review-btn' onClick={() => handleReviewDelete(rev._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                        )))
                        }

                    </div>
            </div>



            
            
        </div>
    ) 
}



export default Reviews