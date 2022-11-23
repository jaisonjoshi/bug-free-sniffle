
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newOffer.scss';
import axios from "axios"


const NewOffer =() => {
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

    const navigate = useNavigate();

    const [info, setinfo] = useState({});

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const handleoffercreateClick = async e => {
        e.preventDefault();
        try{
            const newOffer = {
                ...info
            };
            await axiosInstance.post('/offers', newOffer);
            console.log("new package has been created")

            await navigate('/offers')
        }catch(err){
            console.log(err)
        }
        
    }

    

    return(
        <div className="new-offer">
            <Navbar />
            <Sidenav />

            <div className="newoffer-body">
                    <h1>Create a new offer</h1>
                    <div className="newofferform-container">
                        <form >
                            <div className="form-item">
                                <label > Title</label>
                                <input type="text" name="" id="title" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Description</label>
                                <textarea type="text" id="description" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Location</label>
                                <input type="text" id="location" onChange={handleChange}/>
                            
                            </div>
                           
                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="cheapestPrice" onChange={handleChange}/>
                            
                            </div>
                            <div className="offer-form-submit">
                                <button onClick={handleoffercreateClick}>Create offer</button>

                            </div>
                        </form>
                    </div>
            </div>



            
            
        </div>
    )
}

export default NewOffer