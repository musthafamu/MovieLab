import React from 'react'
import { original } from '../api/request'
import {BsBadge4KFill,BsStarFill } from "react-icons/bs";
import Search from '../Routes/Search';
import { Link } from 'react-router-dom';
import Details from '../Routes/Details';

function Singlecontent({item}) {
    const {media_type,poster_path,vote_average, title,id,release_date}=item
     
  return (
   
      <div>
      <img className='w-[200px]' src={`${original}${poster_path}`} />
        <div className='flex justify-around font-serif'> </div>
      <div className='flex justify-around font-serif'>
        <p>{release_date}</p>
       <div className='flex items-center' >  <i className='mr-2'><BsStarFill color='yellow'/></i>    {vote_average}</div>
  
      </div>
      <div className='text-center font-serif'>{media_type}</div>
    </div>
  )
}

export default Singlecontent