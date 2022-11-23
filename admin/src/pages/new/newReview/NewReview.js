
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newReview.scss';
import axios from "axios"


const NewReview =() => {
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

    const navigate = useNavigate();

    const [info, setinfo] = useState({});

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const handleReviewClick = async e => {
        e.preventDefault();
        try{
            const newReview = {
                ...info
            };
            await axiosInstance.post('/reviews', newReview);
            console.log("new review has been created")

            await navigate('/reviews')
        }catch(err){
            console.log(err)
        }
        
    }

    

    return(
        <div className="new-review">
            <Navbar />
            <Sidenav />

            <div className="newreview-body">
                    <h1>Create a new Review for your service</h1>
                    <div className="newreviewform-container">
                        <form >
                            <div className="form-item">
                                <label > Review</label>
                                <textarea type="text" name="" id="reviewnote" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Author</label>
                                <input type="text" id="author" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Place</label>
                                <input type="text" id="place" onChange={handleChange}/>
                            
                            </div>
                            
                           
                            <div className="review-form-submit">
                                <button onClick={handleReviewClick}>Create Package</button>

                            </div>
                        </form>
                    </div>
            </div>



            
            
        </div>
    )
}

export default NewReview