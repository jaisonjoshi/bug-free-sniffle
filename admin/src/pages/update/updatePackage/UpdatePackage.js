
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './updatePackage.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const UpdatePackage =() => {
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

    const navigate = useNavigate();
    const [files, setFile] = useState("")

    const location = useLocation();
    const [info, setinfo] = useState({});
    const id = location.pathname.split("/")[2];


    const {data} = useFecth(`/packages/${id}`);

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
   
/*     const [shedule,setShedule] = useState([])
 */    var list = data.images
/*     const [dayTitle, setDayTitle] = useState("");
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
       
        
   } */
    /* const updatehandleClick = async e => {
        e.preventDefault();
        try{
            const updatedPackage = {
                ...info,shedule,images: list,
            };
            await axios.patch(`/packages/${id}`, updatedPackage);
            console.log("package has been updated")

            await navigate(`/packages/${id}`)
        }catch(err){
            console.log(err)
        }
        
    } */

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
            
              
              const updatedPackage = {
                ...info,
                images: list,
              };
              console.log(updatedPackage)
              await axiosInstance.patch(`/packages/${id}`, updatedPackage);
                navigate(`/packages/${id}`)
        } catch(err){
            console.log(err)
        }
       
        
    }


    return(
        <div className="new-package">
            <Navbar />
            <Sidenav />

            <div className="newpackage-body">
                    <h1>Update the Package : {data.title}({data._id})</h1>
                    <div className="new-package-box">
                    <div className="newpackageform-container">
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
                                <textarea rows={5} className="scroll" type="text" id="description" defaultValue={data.description} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Location</label>
                                <input type="text" id="location" defaultValue={data.location} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Duration</label>
                                <input type="text" id="duration" defaultValue={data.duration} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="price" defaultValue={data.price} onChange={handleChange}/></div>
                           {/*  {data.shedule && data.shedule.map((obj, i)=> (
                                <div className='shedule-input-con'>
                                    <h3>Shedule</h3>
                                    <div className="shedule-ip-box">
                                        <div className="form-item">
                                            <label>Title</label>
                                            <input type="text" id="sheduleTitle" onChange={handleDayTitleChange} defaultValue={obj.dayTitle}/>
                                        </div>                                        
                                        <div className="form-item">
                                            <label>Description</label>
                                            <input type="text" id="sheduleDesc" onChange={handleDayTitleChange} defaultValue={obj.dayDesc}/>
                                        </div>
                                    </div>
                                    <button onClick={handleSave}>Update</button> 
                                </div>
                            ))}
                             */}
                            <div className="package-form-submit">
                                <button onClick={updatehandleClick}>Update Package</button>

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
                        {/* <div className="package-shedule">
                            <h2>Shedule</h2>
                            <div className="shedule-con">
                                {shedule && shedule.map((obj, i)=> (
                                    <div className="shedule-card">
                                        <h3>Day {i+1}</h3>
                                        <h2>{obj.dayTitle}</h2>
                                        <p>{obj.dayDesc}</p>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </div>
                    </div>
            </div>



            
            
        </div>
    )
}

export default UpdatePackage