import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const BidStatusCard = () => {
    return (
        <div>
            <div className='shadow-md shadow-graydust-normal p-5 my-5 rounded-lg'>
                <div className='flex justify-between flex-wrap'>
                    <h1 className='text-2xl font-bold text-blacky-light'><span className='text-3xl font-light pr-2'><FontAwesomeIcon icon={solid('location-dot')} /></span>Where you want to go</h1>
                    <div className='bg-status-150 p-2 rounded-full border-graydust-normal'><h3><span className='text-status-100'><FontAwesomeIcon icon={solid('circle-check')} /></span> Accepted</h3> </div>
                    {/* Code for other status indicators */}
                    <div className='bg-status-250 p-2 rounded-full border-graydust-normal'><h3><span className='text-status-200'><FontAwesomeIcon icon={solid('circle-notch')} /></span> In progress</h3> </div>
                    <div className='bg-status-350 p-2 rounded-full border-graydust-normal'><h3><span className='text-status-300'><FontAwesomeIcon icon={solid('circle-exclamation')} /></span> Failed</h3> </div>
                </div>
                <div className='flex py-2'>
                    <FontAwesomeIcon className='text-xl text-blacky-light' icon={solid('calendar-week')} />
                    <div className='p-2'>
                        <p className='text-graydust-normal'>Check In</p>
                        <p>10-09-2022</p>
                    </div>
                    <div className='border-l-2 p-2 border-graydust-normal'>
                        <p className='text-graydust-normal '>Check Out</p>
                        <p>10-09-2022</p>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg mr-2 text-blacky-light'><span><FontAwesomeIcon icon={solid('user-group')} /></span> 3 Guests</div>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg mr-2 text-blacky-light'><span><FontAwesomeIcon icon={solid('person-shelter')} /></span> 1 Room</div>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg mr-2 text-blacky-light'>Non AC</div>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg text-blacky-light'>5,000 - 6,000/-</div>
                </div>
                <hr className='mt-5 text-graydust-medium' />
                <details>
                <summary>
                    <span className='pl-3'>
                    Lorem Ipsum and 2 others accepted your Bid
                    </span>
                </summary>
                <div>
                    <p className='pt-6 text-justify'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati .
                    </p>
                </div>
            </details>
            </div>
        </div>
    );
};



export default BidStatusCard;
