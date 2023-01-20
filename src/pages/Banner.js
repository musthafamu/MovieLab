import React, { useEffect } from 'react'
import { original,unavailable } from '../api/request'
import { useBanner } from '../context/Banner.context'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';






function Banner(){
    const handleDragStart = (e) => e.preventDefault();
    const {banner}=useBanner()
   
    const items=banner.map((item)=>(
        <div className='flex justify-center items-center'>

            <img className='lg:w-[400px] md:w-[400px] h-[400px] lg:h-[600px] md:h-[600px] sm:h-[400px]'  src={ item.poster_path? `${original}${item.poster_path}`:unavailable} />
        </div>

    ))

    return(
        <div className='bg-gradient-to-r from-rose-900 to-rose-900'>
            


 <AliceCarousel infinite  animationDuration={2000} autoPlayInterval={3500} disableButtonsControls disableDotsControls autoPlay  items={items} />
        </div>
    )
}

export default Banner