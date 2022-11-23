
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newPackage.scss';
import Packageimg from '../../../components/assets/package.png'
import axios from "axios"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const NewPackage =() => {
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

    const navigate = useNavigate();
    const [files, setFile] = useState("")
    const [info, setinfo] = useState({});
    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    /* let dayTitle = "";
    let dayDesc = "";
    let shedule= []; */
   /*  const handleDayTitleChange = (e) => {
        dayTitle = e.target.value;
    }
    const handleDayDescChange = (e) => {
        dayDesc = e.target.value;
    }
    const handleaddshedule = (e) => {
        e.preventDefault()
        shedule = ([...shedule, {"dayTitle" : dayTitle, "dayDesc": dayDesc}]);
        console.log(shedule)
    }
     */
    const [shedule,setShedule] = useState([])
    const [dayTitle, setDayTitle] = useState("");
    const [dayDesc, setDayDesc] = useState("");
    const handleDayTitleChange = (e) => {
        const {name, value}= e.target;

        if(name === "dayTitle")(
            setDayTitle(value)
        )
        else{
            setDayDesc(value);
        }
    }
  
    const handleSave = (e) => {
        e.preventDefault()
        let tempobject = {}
        tempobject["dayTitle"] = dayTitle;
        tempobject["dayDesc"] = dayDesc;
        setShedule((prev)=> ([...prev, tempobject]));
       
        
   }
    const handleClick = async e => {
        e.preventDefault();
        try{
            const list = await Promise.all(
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
              
              const newPackage = {
                ...info,shedule,
                images: list,
              };
              await axiosInstance.post("/packages", newPackage);
              console.log(newPackage)
                navigate('/packages')
        } catch(err){
            console.log(err)
        }
       
        
    }

    

    return(
        <div className="new-package">
            <Navbar />
            <Sidenav />

            <div className="newpackage-body">
            <h1>Create a new Travel Package</h1>
                   <div className="new-package-box">
                   
                    <div className="newpackageform-container">
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
                                <label>Duration</label>
                                <input type="text" id="duration" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="price" onChange={handleChange}/>
                            
                            </div>
                            <div className='shedule-input-con'>
                                <h3>Shedule</h3>
                                <div className="shedule-ip-box">
                                    <div className="form-item">
                                        <label>Title</label>
                                        <input type="text" id="sheduleTitle" onChange={handleDayTitleChange} name="dayTitle"/>
                                    </div>                                        {/*   reset button must be created */}
                                    <div className="form-item">
                                        <label>Description</label>
                                        <textarea  id="sheduleDesc" onChange={handleDayTitleChange} name="dayDesc"/>
                                    </div>
                                </div>
                                <button onClick={handleSave}>Add next day</button>
                            </div>
                            <div className="package-form-submit">
                                <button onClick={handleClick}>Create Package</button>

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
                            <div className="package-details-flex">
                            <h3>{info.duration}</h3><h3>{info.location}</h3>
                            </div>
                            <div className="package-details-flex-2">
                            <CurrencyRupeeIcon /><h2>{info.price} /-</h2>
                            </div>
                        </div>
                        <div className="package-shedule">
                            <h2>Shedule</h2>
                            <div className="shedule-con">
                                {shedule.map((obj, i)=> (
                                    <div className="shedule-card">
                                        <h3>Day {i+1}</h3>
                                        <h2>{obj.dayTitle}</h2>
                                        <p>{obj.dayDesc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                   </div>

            </div>



            
            
        </div>
    )
}

export default NewPackage