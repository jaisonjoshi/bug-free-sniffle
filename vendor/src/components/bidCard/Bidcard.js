import './bidcard.scss'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Bidcard = () => {
    return(
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
     
        
    </div>
    <div className="bid-card-footer">
            <button>Accept</button>
           
       
            </div>
        </div>
    )
}


export default Bidcard