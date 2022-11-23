
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newHotel.scss';
import axios from "axios"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const NewHotel =() => {
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

    const navigate = useNavigate();
    const [files, setFile] = useState("")

    const [info, setinfo] = useState({});

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const handleClick = async e => {
        e.preventDefault();
        try{
            const list = await Promise.all(
                Object.values(files).map(async (file) => {
                  const data = new FormData();
                  data.append("file", file);
                  data.append("upload_preset", "upload");
                  const uploadRes = await axiosInstance.post(
                    "https://api.cloudinary.com/v1_1/dihrq9pgs/image/upload",
                    data
                  );
        
                  const  url  = uploadRes.data.url;
                  return url;
                })
              );
              
              const newHotel = {
                ...info,
                images: list,
              };
              await axios.post("/hotels", newHotel);
                navigate('/hotels')
        } catch(err){
            console.log(err)
        }
        
    }

    

    return(
        <div className="new-hotel">
            <Navbar />
            <Sidenav />

            <div className="newhotel-body">
                    <h1>Create a Hotel</h1>
                   <div className="new-hotel-box">
                    <   div className="newhotelform-container">
                            <form >
                            <div className="form-item-file">
                            <span>Upload image</span><label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                    <input type="file" name="" id="img-input" multiple onChange={(e) => setFile(e.target.files)}/>
                                
                                </div>
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
                                <div className="hotel-form-submit">
                                    <button onClick={handleClick}>Create Hotel</button>

                                </div>
                            </form>
                        </div>
                        <div className="form-test">
                            <div className="img-container">
                            {files && Object.values(files).map((pic)=>(
                                    <img src={
                                        pic
                                        ? URL.createObjectURL(pic)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    } alt="" />
                            ))}

                            </div>
                            <div className="package-details">
                                <h1>{info.title}</h1>
                                <p>{info.description}</p>
                               
                                 <h3>{info.location}</h3>
                                    
                                <div className="package-details-flex-2">
                                <CurrencyRupeeIcon /><h2>{info.cheapestPrice} /-</h2>
                                </div>
                            </div>
                           
                        </div>
                   </div>
            </div>



            
            
        </div>
    )
}

export default NewHotel