
import React from 'react'
import useFetch from '../../../hooks/useFetch';
import { Link } from "react-router-dom";

const List2_card = () => {
  const {data,loading,error}=useFetch("/hotels")
  return (
    <Link to="/list/hotel:id">
    <div className='overflow-hidden w-full relative'>
      {loading?("Loading"):(
        <>
        {data.map((item)=>(
          <div className="" key={item._id}>
        <img className='h-60 sm:h-72 object-cover w-full rounded-lg' src={require('../../Assets/List.png')} alt="" />
        <div className='p-5'>
            <h3 className='text-xl font-bold text-blacky-medium'>{item.title}</h3>
            <p className='text-sm text-justify text-blacky-light'>{item.description}</p>    
        </div>
        <div className="p-5 flex justify-between">
            <p className="text-evergreen text-xl font-bold">₹{item.cheapestPrice}</p>
            <button className="bg-evergreen text-blacky-light font-semibold rounded-md w-32 h-10">Whats app</button>
        </div>
        </div>
        ))}</>)}

    </div>
    </Link>
  )
}

export default List2_card;
