import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './bidsContainer.scss';

import BidTable from '../../components/bidTable/BidTable';


const BidsContainer =() => {

    
   

    return(
        <div className="bids-container">
            <Navbar />
            <Sidenav />

            <div className="bids-container-body">
                <h1>Recent Bids </h1>
                <BidTable count="9"/>
            </div>



            
            
        </div>
    )
}

export default BidsContainer