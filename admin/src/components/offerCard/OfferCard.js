import './offerCard.scss'
import packageimg from '../assets/package.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';


const OfferCard = ({offer}) => {
    const navigate = useNavigate()
    const handleoffercardclick = () => {
        navigate(`/offers/${offer._id}`)
    }

    return(
        <div className="offer-card" onClick={handleoffercardclick}>
            <div className="offer-card-img">
                <img src={packageimg} alt="" />
            
            </div>
            <div className="offer-card-body">
                <h2>{offer.title}</h2>
                <p>{offer.description}</p>

            </div>
            <div className="offer-card-footer">
            <h3 className='duration'>{offer.location}</h3> 

                <h2><CurrencyRupeeIcon /> {offer.cheapestPrice}</h2>
            </div>
        </div>
    )
}

export default OfferCard