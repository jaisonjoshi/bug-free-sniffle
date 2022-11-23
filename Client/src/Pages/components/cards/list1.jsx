
import React from 'react'
import useFetch from '../../../hooks/useFetch';
import { Link } from "react-router-dom";

const List1_card = () => {
  const {data,loading,error}=useFetch("/packages")
  return (
    <Link to="/list/package:id">

    <div className='overflow-hidden w-full relative'>
   
      {loading?("Loading"):(
        <>
        {data.map((item)=>(
          <div class="" key={item._id} >
        <img className='h-60 sm:h-72 object-cover w-full rounded-lg' src={require('../../Assets/List.png')} alt="" />
        <div className='p-5'>
            <h3 className='text-xl font-bold text-blacky-medium'>{item.title}</h3>
            <p className='text-sm text-justify text-blacky-light'>{item.description}</p>    
        </div>
        <div className="px-5 flex">
            <p className="text-lg text-blacky-light font-bold">{item.duration}</p>
            <img src={require('../../Assets/People.png')} alt="" className="pl-5 h-6" />
            <img src={require('../../Assets/People.png')} alt="" className="h-6" />
        </div>
        <div className="p-5 flex justify-between">
            <p className="text-evergreen text-xl font-bold">₹{item.cheapestPrice}</p>
            <button className="bg-evergreen text-blacky-light font-semibold rounded-md w-32 h-10">Whats app</button>
        </div>
        </div>
        ))}

        </>
      )}
      </div>
    

</Link>)
}

export default List1_card