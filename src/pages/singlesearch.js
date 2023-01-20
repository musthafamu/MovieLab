import React from 'react'
import { original, unavailable } from '../api/request'
import {BsBadge4KFill,BsStarFill } from "react-icons/bs";

function singlesearch({item}) {
    const {media_type,poster_path,vote_average, title,id,release_date}=item
    const rating=parseInt(vote_average)

  return (
    <div className=' lg:mx-4 md:mx-4 sm:mx-4 my-[15px]  rounded-lg  w-[200px] hover:bg-red-700  hover:border-red-700 hover:border-2 duration-100  '>
        
    <img className=' w-[200px] rounded-lg ' src={ poster_path?`${original}${poster_path}`:unavailable}/>
 <div className='flex justify-between p-3'>
   <p>{title}</p>
   <p className='flex items-center mr-2'>  <i className='mr-3'><BsStarFill size={20} color='yellow'/></i>{rating} </p>
 </div>
</div>
  )
}

export default singlesearch
