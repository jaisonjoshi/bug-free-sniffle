
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './updateReview.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';


const UpdateReview =() => {
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

    const navigate = useNavigate();
    const location = useLocation();
    const [info, setinfo] = useState({});
    const id = location.pathname.split("/")[2];


    const {data} = useFecth(`/reviews/${id}`);
    console.log(data)
    
    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const updateReviewhandleClick = async e => {
        e.preventDefault();
        try{
            const updatedReview = {
                ...info
            };
            await axiosInstance.patch(`/reviews/${id}`, updatedReview);
            console.log("package has been updated")

            await navigate('/reviews')
        }catch(err){
            console.log(err)
        }
        
    }

    

    return(
        <div className="new-package">
            <Navbar />
            <Sidenav />

            <div className="newpackage-body">
                    <h1>Update the Package ({id})</h1>
                    <div className="newpackageform-container">
                        <form >
                            <div className="form-item">
                                <label > Review</label>
                                <textarea type="text" name="" id="reviewnote" defaultValue={data.reviewnote} onChange={handleChange}/>
                            
                            </div>
                            
                            <div className="form-item">
                                <label>Author</label>
                                <input type="text" id="author" defaultValue={data.author} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Place</label>
                                <input type="text" id="place" defaultValue={data.place} onChange={handleChange}/>
                            
                            </div>
                            
                            <div className="package-form-submit">
                                <button onClick={updateReviewhandleClick}>Update Package</button>

                            </div>
                        </form>
                    </div>
            </div>



            
            
        </div>
    )
}

export default UpdateReview