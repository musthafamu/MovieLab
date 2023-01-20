import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { original, unavailable,image_300 } from '../api/request';




function Carousel({item}) {

  const responsive = {
    0: {
        items: 1,
    },
    320: {
        items: 2,
    },
    640: {
        items: 3,
    },
    900: {
        items: 4,
    },
    1024: {
        items: 5
    },
    1280: {
        items: 6
    }
  }


    const handleDragStart = (e) => e.preventDefault();

    const items= item? item.map((item)=>(
      <div className=''>
        <img className='w-[200px] rounded-lg md:w-[200px] border-2 border-white' src={item.profile_path?`${original}${item.profile_path}`:unavailable }onDragStart={handleDragStart} role="presentation" />
        <h1>{item.name}</h1>
      </div>

    )):<p>Not available</p>
  return (
    <div className='w-full'>
     
 <AliceCarousel responsive={responsive} disableButtonsControls animationDuration={1000} infinite autoPlayInterval={2500} autoPlay disableSlideInfo disableDotsControls mouseTracking items={items} />


    </div>
  )
}

export default Carousel