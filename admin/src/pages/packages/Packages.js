import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './packages.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import PackageCard from '../../components/packageCard/PackageCard';

const Packages =() => {
    const [packages, setPackages] = useState([]);
    const {data, loading, err} = useFetch("/packages");
    useEffect(()=> {
         setPackages(data);
    }, [data]);
    return(
        <div className="packages">
            <Navbar />
            <Sidenav />

            <div className="packages-body">
                    <div className="packages-body-header">
                    <h1>Travel Packages and catalogue</h1>
                    <Link to="/packages/newpackage">
                            Create a new package
                        </Link>
                    </div>
                    <div className="package-container">
                      
                      
                        { packages && packages.map((pack) => (
                            
                            <PackageCard key={pack._id} pack={pack} />
                                
                        
                                
                        )
                        ) }
                        
                    </div>
            </div>



            
            
        </div>
    )
}

export default Packages