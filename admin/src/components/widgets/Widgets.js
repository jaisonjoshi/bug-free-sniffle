import './widgets.scss'
import TourIcon from '@mui/icons-material/Tour';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


import { Link } from 'react-router-dom';


const Widgets = ({type}) => {
    let data;

    switch (type) {
        case "users" : 
            data = {
                title : "USERS",
                count: 96,
                icon: (
                    <PeopleAltIcon className='widget-header-icn' style={{  color: "red" }}/>

                ),
                link: "users"

            };
            break;
            case "packages" :
                data = {
                    title : "PACKAGES",
                    count: 96,
                    icon: (
                        <TourIcon className='widget-header-icn' style={{  color: "blue" }}/>
    
                    ),
                    link: "packages"
    
                };
                break;
                case "hotels" :
                data = {
                    title : "HOTELS",
                    count: 96,
                    icon: (
                        <AddBusinessIcon className='widget-header-icn' style={{  color: "violet" }}/>
    
                    ),
                    link: "hotels"
    
                };
                break;
                case "offers" :
                data = {
                    title : "OFFERS",
                    count: 96,
                    icon: (
                        <LocalOfferIcon className='widget-header-icn' style={{  color: "yellow" }}/>
    
                    ),
                    link: "offers"
    
                };
                break;
                default: break;

    }


    return(
        <div className="widget">
            <div className="widget-header">
            <h4>{data.title}</h4>
            </div>
            <div className="widget-body">
            <h1>{data.count}</h1>{data.icon}
            </div>
            <div className="widget-footer">
            <Link >View</Link>
            </div>
        </div>
    )
}


export default Widgets