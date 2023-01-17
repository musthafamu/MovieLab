import React, { useEffect } from 'react'
import { original,unavailable } from '../api/request'
import { useBanner } from '../context/Banner.context'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, Pagination} from 'swiper';
import 'swiper/css/autoplay'




//  const movie=banner[Math.floor(Math.random() * banner.length)]

function Banner(){
    const handleDragStart = (e) => e.preventDefault();
    const {banner}=useBanner()
   
    const items=banner.map((item)=>(
        <div className='flex items-center justify-center duration-300'>
    <img className='lg:w-[400px] md:w-[400px] h-[400px] lg:h-[600px] md:h-[600px] sm:h-[400px]'  src={ item.poster_path? `${original}${item.poster_path}`:unavailable} />
        </div>
    ))

    return(
        <div className='bg-gradient-to-r from-rose-900 to-black'>
            


 <AliceCarousel infinite  animationDuration={1000} autoPlayInterval={2500} disableButtonsControls disableDotsControls autoPlay  items={items} />
        </div>
    )
}

export default Banner