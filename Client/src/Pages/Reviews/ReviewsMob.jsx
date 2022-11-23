import React from 'react'
// import "../../../node_modules/slick-carousel/slick/slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from '../../hooks/useFetch';

const ReviewsMob = () => {
    const {data,loading,error}=useFetch("/reviews?limit=3")
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        
        <Slider {...settings}>
            <div>
            {loading?("Loading"):(
                <>
               { data.map((item)=>(
           
           <div className='p-10' key={item._id}>
            <div className='flex justify-center'>
                <div className='w-2/5 h-2/5 rounded-full'>
                    <img className='w-full object-cover' src={require('../Assets/avatar.png')} alt="Avatar" />
                </div>
            </div>
            <p className='text-justify pt-10'>
                 {item.desc}
            </p>
            <div className='pt-5'>
                <span className='font-medium'>{item.username}</span>
            </div>
        </div>
        ))
        
                }
                
        
        </>
        )}
        </div>
        </Slider>
    );
}



export default ReviewsMob