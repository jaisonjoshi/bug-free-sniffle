import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import axios from 'axios'
const Bidform = () => {
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

    const [info, setinfo] = useState({});
    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.name] : e.target.value}))
    }
    const handleClick = async e => {
        e.preventDefault();
        try{
            
              
              const newBid = {
                ...info
              };console.log(newBid)
              await axiosInstance.post("/bids", newBid);
                
        } catch(err){
            console.log(err)
        }
        
    }



    return (
        <div className="">
            <div className=""><Navbar /></div>
            <div className="w-full mt-40 px-12 md:px-20 lg:px-40">
                <h1 className="text-4xl  text-blacky-medium font-bold">Bid Today</h1>
                <p className="text-lg my-5 text-justify text-blacky-dark">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            </div>
            <form action="" className="" method="post">
                <div className="py-10 px-12 md:px-20 lg:px-40">
                    <div className="flex mid:mx-10 bordercolour text-graydust-medium rounded-lg w-72 md:w-1/2 py-2">
                    <FontAwesomeIcon icon={solid('location-dot')} className="h-7 w-7 my-auto mx-4"/>
                    <select name="location" id="location" onChange={handleChange} className="outline-none border border-none w-full text-gray focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium text-graydust-medium">
                            <option value="none" className="outline-none border border-none text-center">Where are you going?</option>
                            <option value="palakkad" className="outline-none border border-none text-center">Palakkad</option>
                            <option value="wayanad" className="outline-none border border-none text-center">Wayanad</option>
                            <option value="idukki" className="outline-none border border-none text-center">Idukki</option>
                            <option value="munnar" className="outline-none border border-none text-center">Munnar</option>
                        </select>
                    </div>
                    <div className="md:flex my-7">
                        <div className="flex bordercolour text-graydust-medium rounded-lg w-72 py-2">
                        <FontAwesomeIcon icon={solid('list')} className="h-6 w-6 my-auto mx-4" />
                            <select name="category" id="categories" onChange={handleChange} className="border border-none focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium outline-none text-graydust-medium">
                                <option value="vacation" className="border border-none outline-none text-center">Vacation</option>
                                <option value="honeymoon" className="border border-none outline-none text-center">Honeymoon</option>
                                <option value="tour" className="border border-none outline-none text-center">Tour</option>
                                <option value="adventure" className="border border-none outline-none text-center">Adventure</option>
                            </select>
                        </div>
                        <div className="md:my-auto mt-7">
                            <input type="radio" id="ac" name="room_type" onChange={handleChange} value="ac" className="md:ml-20 outline-none" />
                            <label for="ac" className="ml-5 text-graydust-normal">AC</label>
                            <input type="radio" id="non_ac" name="room_type" onChange={handleChange} value="nonac" className="ml-20 outline-none" />
                            <label for="non_ac" className="ml-5 text-graydust-normal">Non AC</label>
                        </div>
                    </div>

                    <div className="md:flex">
                        <div className="flex justify-center items-center px-3 rounded-lg my-7 md:my-5 bordercolour text-graydust-medium py-2 p-1 w-72">
                            <h6 className="">Check in &nbsp;</h6>
                            <input type="date" name="checkin" onChange={handleChange} className="border border-none focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium outline-none " />
                        </div>
                        <div className="flex justify-center items-center px-3 rounded-lg my-7 md:my-5 bordercolour text-graydust-medium py-2 md:ml-10 p-1 w-72">
                            <h6 className="">Check out &nbsp;</h6>
                            <input type="date" name="checkout" onChange={handleChange} className="border focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium border-none outline-none" />
                        </div>
                    </div> 

                    <div className="md:flex mt-5">
                        <div className="flex bordercolour text-graydust-medium rounded-lg w-fit pr-2 py-2">
                        <FontAwesomeIcon icon={solid('user')} className="h-8 w-8 my-auto mx-4" />
                            <input type="number" name="accomodation" onChange={handleChange} className="border border-none focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium outline-none" placeholder="3 Guests" />
                        </div>
                        <div className="flex md:mx-10 md:my-0 my-7 bordercolour text-graydust-medium rounded-lg w-fit pr-2 py-2">
                        <FontAwesomeIcon icon={solid('bed')} className="h-10 w-10 my-auto mx-4" />
                            <input type="number" name="roomcount" onChange={handleChange} className="border border-none focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium outline-none" placeholder="3 Room" />
                        </div>
                    </div>

                    <p className="my-5 text-graydust-normal pt-8">Enter the amount you can pay</p>

                    <div className="md:flex">
                        <div className="my-5">
                            <label for="min_budget" className="text-graydust-medium">Min</label>
                            <input type="number" id="min_budget" name="min_budget" onChange={handleChange} placeholder="₹1000" className="ml-5 p-3 outline-none border border-graydust-medium focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium  text-graydust-medium w-44 py-2 rounded-xl" />
                        </div>
                        <div className="sm:my-5">
                            <label for="max_budget" className="md:ml-10 text-graydust-medium">Max</label>
                            <input type="number" id="max_budget" name="max_budget" onChange={handleChange} placeholder="₹3000" className="ml-5 p-3 outline-none border border-graydust-medium focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium  text-graydust-medium w-44 py-2 rounded-xl" />
                        </div>
                    </div>

                    <div className="flex justify-between my-5 py-8 pt-12">
                        <input type="reset" value="Reset" className="mr-10 outline-none bordercolour bg-blacky-dark text-whiteglow hover:text-blacky-dark hover:cursor-pointer text-graydust-normal hover:bg-whiteglow h-16 w-44 text-center rounded-xl " />
                        <input type="submit" value="Submit" onClick={handleClick} className="outline-none border  h-16 w-44 text-center bg-evergreen text-blacky-dark rounded-xl" />
                    </div>

                </div>

            </form>
            <Footer />
        </div>
    )
}
export default Bidform
