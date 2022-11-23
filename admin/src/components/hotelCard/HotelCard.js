import './hotelCard.scss'
import packageimg from '../assets/package.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';


const HotelCard = ({hotel}) => {
    const navigate = useNavigate()
    const handlehotelcardclick = () => {
        navigate(`/hotels/${hotel._id}`)
    }

    return(
        <div className="hotel-card" onClick={handlehotelcardclick}>
            <div className="hotel-card-img">
                <img src={hotel.images[0]} alt="" />
            </div>
            <div className="hotel-card-body">
                <h2>{hotel.title}</h2>
                <p>{hotel.description}</p>

            </div>
            <div className="hotel-card-footer">
            <h3 className='duration'>{hotel.location}</h3> 

                <h2><CurrencyRupeeIcon /> {hotel.cheapestPrice}</h2>
            </div>
        </div>
    )
}

export default HotelCard