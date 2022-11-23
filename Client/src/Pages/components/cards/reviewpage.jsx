import { faPrescriptionBottleMedical } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import useFetch from '../../../hooks/useFetch';

const Reviewpage = () => {
  const {data,loading,error}=useFetch("/reviews")
            return(

                
                <div className="package-card">
                    {loading?("Loading"):(
                    <>
                    {data.map((item)=>(
                        <div key={item._id}>
                        <div><h1>{item.username}</h1></div> 
                <div className="package-card-img">
                    <img src={require('../../Assets/avatar.png')} alt="Avatar"/>
                </div>
                <div className="package-card-body">
               
                    <p>{item.desc}</p>
                   
    
                </div>
                <div className="package-card-footer">
               
                <h3 className='duration'>Rating : 
                {item.rating}
                </h3> 
                <br></br>
                </div></div>
                    ))}</>)}
            </div>
            )

}

export default Reviewpage