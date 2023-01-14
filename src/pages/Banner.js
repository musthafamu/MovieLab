import React, { useEffect } from 'react'
import { original } from '../api/request'
import { useBanner } from '../context/Banner.context'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Action } from '@remix-run/router';


function Banner() {
 const {banner}=useBanner()
 const handleDragStart = (e) => e.preventDefault();

 const movie=banner[Math.floor(Math.random() * banner.length)]
    
 
const items = [
  <img className='lg:h-[450px]  lg:ml-[30%]  h-[300px] mt-3  object-contain  lg:w-[500px] sm:h-[400px] md:h-[450px] ' src={`${original}${movie?.poster_path}`} onDragStart={handleDragStart} role="presentation" />,
    <img  className='lg:h-[400px] object-contain md:mt-[5%] mt-[30%] md:
    lg:mt-[5%] w-[600] lg:w-full'  src={`${original}${movie?.backdrop_path}`} onDragStart={handleDragStart} role="presentation" />,

  
];
    return(
        <div className=''>


        <div className='bg-gradient-to-r from-black to-red-800 '>
         <AliceCarousel autoPlay  autoPlayInterval={2500} mouseTracking infinite disableButtonsControls disableSlideInfo  disableDotsControls animationDuration={2000} items={items} />
        </div>

        </div>
    )
}

export default Banner