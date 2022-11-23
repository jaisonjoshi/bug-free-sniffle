import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './offers.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import OfferCard from '../../components/offerCard/OfferCard';

const Offers =() => {
    const [offers, setOffers] = useState([]);
    const {data, loading, err} = useFetch("/offers");
    useEffect(()=> {
         setOffers(data);
    }, [data]);
  
    return(
        <div className="offers">
            <Navbar />
            <Sidenav />

            <div className="offers-body">
                    <div className="offers-body-header">
                    <h1>Add, update or delete offers</h1>
                    <Link to="/offers/newoffer">
                            Create a new offer
                        </Link>
                    </div>
                    <div className="offer-container">
                      
                        { loading ? ("loading"): (offers && offers.map((offer) => (
                            
                            <OfferCard key={offer._id} offer={offer} />
                        )
                        
                                
                        )
                        ) }
                        
                    </div>
            </div>



            
            
        </div>
    )
}

export default Offers