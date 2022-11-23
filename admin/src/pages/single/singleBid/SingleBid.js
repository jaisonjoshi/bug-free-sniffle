import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './singleBid.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import useFecth from '../../../hooks/useFetch'
import axios from 'axios'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const SingleBid = () => {
   const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const {data, loading, error } = useFecth(`/bids/${id}`);


   
    return(

        <div className="Single-package">
            <Navbar />
            <Sidenav />

            <div className="singleBid-container">
               <h1>Bid Request from {data.user} ID: {data._id}</h1>
                <div className="bid-card">
                <div className="bid-card-con">
                <div className="bid-card-left">
                <div className="bid-header">
                    <div className="bid-header-left">
                        <div className="head"><LocationOnOutlinedIcon className='icon'/> <h2>Munnar</h2></div>
                    </div>
                   
                </div>
                <div className="bid-body">
                    <div className="date-con">
                        <div className="icon">
                            <DateRangeOutlinedIcon />
                        </div>
                        <div className="checkin">
                            <p>Check In</p>
                            <h3>10-09-2022</h3>
                        </div>
                        <div className="checkout">
                        <p>Check Out</p>
                            <h3>10-09-2022</h3>
                        </div>
                    </div>
                </div>
                <div className="bid-footer">
                    <span className="footer-card">
                        3 guests
                    </span>
                    <span className="footer-card">
                        3 rooms
                    </span>
                    <span className="footer-card">
                       family
                    </span>
                   
                </div>
                <div className="bid-footer-2">
                   <h2>Maximum price quoted : {<CurrencyRupeeIcon className='icn'/>} 5000 /-</h2>
                   
                </div>
                </div>
                <div className="bid-card-right">
                    <h2>User Details</h2>
                    <div className="user-details">
                        <table>
                            <tr>
                                <td>
                                    User Name
                                </td>
                                <td>
                                    : Jaison
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    User Email
                                </td>
                                <td>
                                    : jaisonjoshi001@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Phone 
                                </td>
                                <td>
                                    : 9562523642
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                
                
            </div>
            <div className="bid-card-footer">
           
                    <h3>Cuuurently Accepted by : 0</h3>
                    <div className="hotel-bid-card">
                        <div className="hotel-card-left">
                            <h3>Hotel Name</h3><br></br>
                            <h4>Location</h4>
                        </div>
                        <div className="hotel-card-right">
                            <h4>jaisonjoshi001@gmil.comn</h4><br></br>
                            <h4>9562523642</h4>
                        </div>
                    </div>
                   
               
                    </div>
                </div>

               </div>
            </div>



            
            
      
    )
}


export default SingleBid