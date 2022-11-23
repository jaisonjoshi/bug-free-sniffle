
import React from 'react'
import useFetch from '../../hooks/useFetch';
import OfferCard from '../components/cards/offerCard';


const Home = () => {
  const {data,loading,error}=useFetch("/packages?offers=true")
            return(

                
                <div className="package-card">
                    {loading?("Loading"):(
                    <>
                    {data.map((item)=>(
                             <OfferCard key={item._id} item={item} />


                    ))}</>)}
            </div>
            )

}

export default Home