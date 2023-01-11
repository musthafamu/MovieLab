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
  <img className='lg:h-[500px] lg:ml-[30%] h-[300px] object-contain w-full lg:w-[500px] md:h-[400px] ' src={`${original}${movie?.poster_path}`} onDragStart={handleDragStart} role="presentation" />,
  <img  className='lg:h-[500px] object-contain lg:w-full'  src={`${original}${movie?.backdrop_path}`} onDragStart={handleDragStart} role="presentation" />,

  
];
    return(
        <div className=''>
         <AliceCarousel autoPlay  autoPlayInterval={2000} mouseTracking infinite disableButtonsControls disableSlideInfo  disableDotsControls animationDuration={1000} items={items} />
        </div>
    )
}

export default Banner