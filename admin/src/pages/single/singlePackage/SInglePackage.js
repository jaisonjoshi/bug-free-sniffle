import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './singlePackage.scss'
import Packageimg from "../../../components/assets/package.png"
import { useLocation, useNavigate } from 'react-router-dom'
import useFecth from '../../../hooks/useFetch'
import axios from 'axios'
import Slider from "react-slick";
import '../../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'; 
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



const SinglePackage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const {data, loading, error } = useFecth(`/packages/${id}`);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };

    const handlePackageUpdate = (id) => {
        navigate(`/packages/${id}/update`)
    }
    const handlePackageDelete = async (id) => {
        try{
            await axios.delete(`/packages/${id}`);
            navigate('/packages')
        }catch(err){
            console.log(err);
        }

    }
    return(

        <div className="Single-package">
            <Navbar />
            <Sidenav />

            <div className="singlepackage-container">
               {loading ? ("loading ") : (
                    <div className="singlepackage">
                  
                    <div className="singlepackage-body">

                        <div className="singlepack-left">
                            <Slider {...settings}>
                               {/*  <div className="img"><img src={Packageimg}/> </div>
                                <div className="img"><img src={Packageimg}/> </div>

                                <div className="img"><img src={Packageimg}/> </div>
 */}                            {data.images && data.images.map((pic) => (
                                        <div className='img'><img src={pic} alt="" /></div>
                                    ))}
              
                            </Slider>
                            
                        </div>
                        <div className="singlepack-right">
                        <h1>{data.title}</h1>

                            <p>{data.description}</p>
                            <h4>{data.duration}</h4>
                            <div className="single-pack-right-flex">
                                <CurrencyRupeeIcon /><h2>{data.price} /-</h2>
                            </div>
                            <div className="singlepackage-btngrp">
                            <button className='singlepackage-btn' onClick={() => handlePackageUpdate(id)}>Update Package</button>
                            <button className='singlepackage-btn' onClick={() => handlePackageDelete(id)}>Delete Package</button>
                            </div>
                        


                        </div>
                       


                       {/*  <div className="singlepackage-img">
                            <img src={Packageimg} />
                        </div>
                        <div className="singlepackage-content">  
                            <p>{data.description}</p>
                            <h3>{data.duration}</h3>
                            <h2>{data.price}</h2>
                            {
                                data.shedule && data.shedule.map((obj)=> (
                                    <h1>{obj.dayTitle}</h1>
                                ))
                            }
                        </div> */}

                    </div>
                    <div className="single-package-body-2">
                            <div className="single-package-body-2-left">
                                <h2>Shedule</h2>
                                {data.shedule && data.shedule.map((obj, i)=> (
                                    <div className='shedule-day'>
                                        <div className="shedule-day-left">
                                            <h2>Day {i+1}</h2>
                                        </div>
                                        <div className="shedule-day-right">
                                            <h2 className="dayTitle">{obj.dayTitle}</h2>
                                            <p>{obj.dayDesc}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="single-package-body-2-right">

                                
                            </div>

                        </div>
                </div>
               )}
            </div>



            
            
        </div>
    )
}


export default SinglePackage