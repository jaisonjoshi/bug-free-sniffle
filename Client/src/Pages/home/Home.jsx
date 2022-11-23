import React from 'react'
import DestCard from '../components/cards/trending_dest_card'
import Offers from '../components/cards/special_offers_card'
import Review from '../Reviews/Review'
import ReviewMob from '../Reviews/ReviewsMob'
import Footer from '../components/Footer/Footer'
import { Link } from "react-router-dom";
import Timer from '../components/timer/timer'
import NavbarTest from '../components/navbar/navbar'
import Slider from "react-slick";
import cImg1 from '../Assets/homeCarousel/pic1.jpg'
import cImg2 from '../Assets/homeCarousel/pic2.jpg'
import cImg3 from '../Assets/homeCarousel/pic3.jpg'
import cImg4 from '../Assets/homeCarousel/pic4.jpg'
import cImg5 from '../Assets/homeCarousel/pic5.jpg'
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const carouselImgs = [cImg1, cImg2, cImg3, cImg4, cImg5]
  const settings = {
    className: "z-0",
    infinite: true,
   
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 4000,
    
  };
  return (
    <div className="">
      <div className=" w-full h-screen">
           <NavbarTest/>
             <Slider {...settings}>
                <div className='pic1 w-screen h-screen'>wcff</div>
                <div className='pic2 w-screen h-screen'></div>
                <div className='pic3 w-screen h-screen'></div>

                <div className='pic4 w-screen h-screen'></div>

                <div className='pic5 w-screen h-screen'></div>


        </Slider>
        <div className=" absolute top-0 h-[100vh] flex items-center pl-16 lg:pl-40 pr-12 md:pr-0">
          <div>
          <h1 className="text-5xl text-whiteglow font-bold ">
            THE BEST TOURS IN JUST 3 CLICKS
          </h1>
          <p className="text-md text-whiteglow py-5">
            Enter a country, a city or even just a landmark and we'll find the right tours for you
          </p>

          <button className="flex justify-center items-center bg-evergreen text-blacky-medium w-36 font-bold rounded-md p-2 my-5 hover:bg-whiteglow duration-500">
            <Link className="" to="/list">Explore</Link>
            <img src={require('../Assets/Arrow.png')} alt="" className="h-3 w-3 mx-4 my-2" />
          </button>
          </div>

        </div>
      </div>

      {/* Bid section */}

      <div className='md:flex  bg-blacky-light sm:pl-8 xl:pl-20 w-full h-1/6'>
        <div className='w-full md:1/2 lg:w-2/3'>
          <div className="p-10 flex">
            <div className="">
              <img className='w-20 h-20' src={require('../Assets/clock.png')}></img>
            </div>
            <div className="w-48 h-16 mt-2 bg-whiteglow text-blacky-dark flex justify-center items-center text-xl font-bold border border-none rounded-full">
              <span className="flex text-xl">Ends in&nbsp;<Timer /></span>
            </div>
          </div>

          <h1 className='font-bold text-4xl text-evergreen px-10 md:px-20 py-2'>
            Bid for today
          </h1>
          <p className=" text-whiteglow px-10 md:px-20 py-3">Wish you could bid hotel prices for your budget and make your trip more pocket friendly? Here's an end to your worries because we let you place your bid for today's lowest hotel prices. </p>
          <h2 className="text-3xl text-whiteglow font-bold px-10 md:px-20 py-2">Intersting isn't it?</h2>

          <div className="px-10 md:px-20 py-5 pb-12">
            <button className='font-bold text-lg border p-2 rounded-md w-full sm:w-48 bg-whiteglow hover:bg-evergreen border-transparent hover:border-transparent hover:transition-colors hover:duration-200' ><Link className="" to="/what-is-bid">Know More</Link></button>
          </div>
        </div>
        <div className="md:1/2 lg:w-1/3 flex items-end justify-end">
          <img className="w-[80%] sm:w-1/2 md:w-full sm:-mt-40 " src={require('../Assets/Image.png')}></img>
        </div>
      </div>

      {/* special offers block */}

      <div className="mt-20 mb-12">
        <h1 className='text-center mx-28 font-bold text-blacky-dark text-4xl'>Special Offers</h1>
                  <p className='text-center py-4 mx-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore iure odit nemo. Deleniti aut blanditiis sit adipisci nisi dolorem animi, quibusdam tenetur obcaecati in quaerat reiciendis, quidem vitae velit voluptates.</p>
      </div>

      <div className=" mx-8 md:mx-16 offer-container">
        <Offers />
      </div>

      <div>

        {/* Trending destinations block */}

        <div className='pt-28 pb-8'>
          <div className='text-center'>
            <h1 className='font-bold text-4xl'>Trending Destinations</h1>
            <p className='text-lg pt-4'>Have a plan to go vacation? See trending destinations for your inspiration where to go.</p>
          </div>
        </div>
        <div className='grid md:mx-16 sm:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-10 m-11'>
          <DestCard />
          
        </div>
        <div className='p-7 text-center mb-12'>
          <button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >More destinations</button>
        </div>
      </div >

      {/* Reviews block */}

      <div className='bg-graydust-light'>
        <h1 className='font-bold text-4xl text-center pt-7 mb-8'>Reviews</h1>
        <div className='hidden sm:block px-20'><Review /></div>
        <div className='sm:hidden'><ReviewMob /></div>
        <div className='text-center py-10 px-7'><button className='bg-blacky-dark text-whiteglow font-semibold p-2 px-10 rounded-md  sm:w-auto hover:bg-evergreen hover:text-blacky-dark hover:transition-colors hover:duration-200'>More reviews</button></div>
      </div>

      {/* Footer block */}

      <Footer />
    </div>
  )
}
export default Home