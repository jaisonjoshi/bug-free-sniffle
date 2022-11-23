import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Assets/Trouvailler Green@2x.png'
const Footer = () => {
  return (
    <div>
      <footer className='bg-blacky-light p-4'>
        <div className='flex justify-center align-middle'>
          <div className='text-whiteglow grid grid-cols-3 my-10'>
            <div className='text-lg p-4'><h3>Title of section</h3></div>
            <div><h3 className='text-lg p-4'>Title of section</h3></div>
            <div><h3 className='text-lg p-4'>Title of section</h3></div>
            <div><h5 className='text-sm p-4'>Page title</h5></div>
            <div><h5 className='text-sm p-4'>Page title</h5></div>

            <div className='hidden md:block md:row-span-3 md:pl-4'>
              <h3 className='text-lg'>Subscribe to Newsletter</h3>
              <h5 className='text-sm pb-3'>Your email</h5>
              <div className='flex overflow-hidden h-11 rounded-lg w-full'>
                <div><input type="text" className='h-full text-blacky-dark p-3 focus:outline-evergreen' /></div>
                <button className='bg-evergreen h-auto'><FontAwesomeIcon className='px-4' icon={faPaperPlane} /></button>
              </div>
            </div>

            <div><h5 className='text-sm p-4'>Page title</h5></div>
            <div><h5 className='text-sm p-4'>Page title</h5></div>
            <div><h5 className='text-sm p-4'>Page title</h5></div>
            <div><h5 className='text-sm p-4'>Page title</h5></div>
          </div>
        </div>
        <div className='md:hidden text-whiteglow p-4'>
          <h3 className='text-lg'>Subscribe to Newsletter</h3>
          <h5 className='text-sm pb-3'>Your email</h5>
          <div className='flex overflow-hidden h-11 rounded-lg w-full'>
            <div><input type="text" className='h-full grow text-blacky-dark p-3 focus:outline-evergreen' /></div>
            <button className='flex-none bg-evergreen rounded-r-lg h-auto'><FontAwesomeIcon className='px-4' icon={faPaperPlane} /></button>
          </div>
        </div>

        <div className='border-t-2 border-graydust-medium flex justify-between align-middle  p-6  mx-4 sm:mx-10'>
          <a href="" className='w-4/12 sm:w-1/12'>
            <img src={Logo} alt="Trouvailler" />
          </a>
          <div className='flex justify-evenly'>
            <a href="">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faFacebookF} /></div>
            </a>
            <a href="">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faYoutube} /></div>
            </a>
            <a href="">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faInstagram} /></div>
            </a>
            <a href="">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faPaperPlane} /></div>
            </a>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default Footer