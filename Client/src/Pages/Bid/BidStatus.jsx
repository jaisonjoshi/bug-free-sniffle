import React from 'react';
import BidStatusCard from '../components/cards/bid_status_card';
import Footer from '../components/Footer/Footer'

import Navbar from '../components/navbar/navbar'
const BidStatus = () => {
    return (
        <div>
            <Navbar />
            <div className='mx-12 md:mx-16  lg:mx-28  xl:mx-40 pb-16 mt-40'>
                <h1 className='text-2xl font-bold text-blacky-bright py-7'>Bid Status</h1>
                <BidStatusCard />
                <BidStatusCard />
                <BidStatusCard />
                <BidStatusCard />
                <BidStatusCard />
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default BidStatus;
