
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './updateHotel.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
 

const UpdateHotel =() => {
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

    const navigate = useNavigate();
    const [files, setFile] = useState("")
    const location = useLocation();
    const [info, setinfo] = useState({});
    const id = location.pathname.split("/")[2];


    const {data} = useFecth(`/hotels/${id}`);
    var list = data.images
    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const updatehandleClick = async e => {
        e.preventDefault();
        try{
            
                if(files != ""){
                    list = await Promise.all(
                        Object.values(files).map(async (file) => {
                          const data = new FormData();
                          data.append("file", file);
                          data.append("upload_preset", "upload");
                          const uploadRes = await axios.post(
                            "https://api.cloudinary.com/v1_1/dihrq9pgs/image/upload",
                            data
                          );
                
                          const  url  = uploadRes.data.url;
                          return url;
                        })
                        
                      );

                }
                   
                  
                
              const updatedHotel = {
                ...info,
                images: list,
              };
              console.log(updatedHotel)
              await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
                navigate(`/hotels/${id}`)
        } catch(err){
            console.log(err)
        }
        /* try{
            const updatedHotel = {
                ...info
            };
            await axios.patch(`/hotels/${id}`, updatedHotel);
            console.log("package has been updated")

            await navigate(`/hotels/${id}`)
        }catch(err){
            console.log(err)
        } */
        
    }

    

    return(
        <div className="new-hotel">
            <Navbar />
            <Sidenav />

            <div className="newhotel-body">
                    <h1>Update the Hotel : {data.title}({data._id})</h1>
                   <div className="new-package-box">
                   <div className="newhotelform-container">
                        <form >
                        <div className="form-item-file">
                            <span>Upload image</span><label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                    <input type="file" name="" id="img-input" multiple onChange={(e) => setFile(e.target.files)}/>
                                
                                </div>
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
                            <div className="hotel-form-submit">
                                <button onClick={updatehandleClick}>Update Package</button>

                            </div>
                        </form>
                    </div>
                    <div className="form-test">
                            <div className="img-container">
                            {files && Object.values(files).map((pic, i)=>(
                                    <img key={i} src={
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

export default UpdateHotel