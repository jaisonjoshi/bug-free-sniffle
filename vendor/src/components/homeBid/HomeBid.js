import './homeBid.css'
import Bidcard from '../bidCard/Bidcard';

const HomeBid = () => {
    return(
        <div className="home-bid">
            <h1>Recent bids in your region</h1>
            <Bidcard />
        </div>
    )
}

export default HomeBid