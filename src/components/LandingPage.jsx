import React from 'react';
import background_1 from '../assets/background_1.mp4';
import Social from './Social';

const LandingPage = () => {
  return (
    <div className='relative h-screen'>
      <div className='w-full absolute inset-0 overflow-hidden'>
        <video className='videoTag aspect-video w-full h-full object-cover ' autoPlay loop muted>
          <source src={background_1} type='video/mp4' />
        </video>
      </div>

      <div className='absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4'>
        <div className='text-white font-bold flex flex-col sm:flex-row gap-2 text-3xl sm:text-5xl heading pt-10 text-center sm:text-left'>
          <div>Elevate your</div>
          <div className='bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 inline-block text-transparent bg-clip-text'>Digital Presence</div>
          <div>with Ecoavenstra!</div>
        </div>

        <div className='py-4 sm:py-[5%] sub-heading text-center'>
          <ul className='flex flex-col sm:flex-row gap-4 sm:gap-20 font-semibold text-lg sm:text-xl'>
            <li>Leading web Application</li>
            <li>Software Design & development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div className='py-4 sm:py-[6%] button text-center'>
          <button className='bg-blue-700 text-white font-bold text-lg py-2 px-6 sm:px-10 rounded-full'>Get in Touch</button>
        </div>
      </div>

      <div className='absolute bottom-4 left-4 sm:bottom-auto sm:left-auto flex sm:justify-start  z-20'>
        <Social />
      </div>
    </div>
  );
}

export default LandingPage;
