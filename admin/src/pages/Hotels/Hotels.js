import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './hotels.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import HotelCard from '../../components/hotelCard/HotelCard';

const Hotels =() => {
    const [hotels, setHotels] = useState([]);
    const {data, loading, err} = useFetch("/hotels");
    useEffect(()=> {
         setHotels(data);
    }, [data]);
  
    return(
        <div className="hotels">
            <Navbar />
            <Sidenav />

            <div className="hotels-body">
                    <div className="hotels-body-header">
                    <h1>Hotels</h1>
                    <Link to="/hotels/newHotel">
                            Create a new Hotel
                        </Link>
                    </div>
                    <div className="hotel-container">
                      
                      
                        { hotels && hotels.map((hotel) => (
                            
                            <HotelCard key={hotel._id} hotel={hotel} />
                                
                        
                                
                        )
                        ) }
                        
                    </div>
            </div>



            
            
        </div>
    )
}

export default Hotels