
import React from 'react'
import useFetch from '../../../hooks/useFetch';
import DestinationCard from '../../components/cards/destinationCard'

const Home = () => {
  const {data,loading,error}=useFetch("/packages")
            return(

                
                <div className="package-card">
                    {loading?("Loading"):(
                    <>
                    {data.map((item)=>(
                             <DestinationCard key={item._id} item={item} />


                    ))}</>)}
            </div>
            )

}

export default Home