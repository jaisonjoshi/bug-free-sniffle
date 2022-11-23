
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './updateOffer.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';


const UpdateOffer =() => {
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

    const navigate = useNavigate();
    const location = useLocation();
    const [info, setinfo] = useState({});
    const id = location.pathname.split("/")[2];


    const {data} = useFecth(`/offers/${id}`);

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const updatehandleClick = async e => {
        e.preventDefault();
        try{
            const updatedOffer = {
                ...info
            };
            await axiosInstance.patch(`/offers/${id}`, updatedOffer);
            console.log("package has been updated")

            await navigate(`/offers/${id}`)
        }catch(err){
            console.log(err)
        }
        
    }

    

    return(
        <div className="new-offer">
            <Navbar />
            <Sidenav />

            <div className="newoffer-body">
                    <h1>Update the offer :    {data.title} ({data._id})</h1>
                    <div className="newofferform-container">
                        <form >
                            <div className="form-item">
                                <label > Title</label>
                                <input type="text" name="" id="title" defaultValue={data.title} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Description</label>
                                <textarea type="text" id="description" defaultValue={data.description} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Location</label>
                                <input type="text" id="location" defaultValue={data.location} onChange={handleChange}/>
                            
                            </div>
                            
                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="cheapestPrice" defaultValue={data.cheapestPrice} onChange={handleChange}/>
                            
                            </div>
                            <div className="offer-form-submit">
                                <button onClick={updatehandleClick}>Update offer</button>

                            </div>
                        </form>
                    </div>
            </div>



            
            
        </div>
    )
}

export default UpdateOffer