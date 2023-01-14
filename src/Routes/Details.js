import axios from 'axios'
import React, { useEffect, useState } from 'react'
 import { Link, parsePath, useNavigate, useParams } from 'react-router-dom'
import { key,original,unavailable} from '../api/request'
import { Trending, useTrending } from '../context/Trending.context'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillPlayCircle } from "react-icons/ai";
import { Navigation, Autoplay, } from 'swiper';
import {BsBadge4KFill,BsStarFill } from "react-icons/bs";

import 'swiper/css';
import 'swiper/css/autoplay'
import { useSearch } from '../context/Search.context'

function Details() {
  const {id}=useParams()
  


   
  const {page,data,fetch,type,}=useTrending()
  const {details}=useSearch()
  const [person,setperson]=useState([])
     const [video,setvideo]=useState()
  const videofetch=async()=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
    setvideo(res.data.results[0].key)

  }
  
 
  const moviefetch=async()=>{
      const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}&language=en-US&page=1`)
      setperson(res.data.results)
    }
  
  
   
   
 const sin=data.find(data=>data.id===parseInt(id))
 
   
useEffect(()=>{
 fetch()
 moviefetch()
 videofetch()
},[])
  return (
  
    <div>
 <div className=''>
<div className='lg:flex p-3 md:flex   '>
    <img className='border-2 border-red-600 h-[400px] ml-[10%] lg:ml-[1%]  object-contain  lg:h-[500px]  lg:border-red-700  '  src={ sin.poster_path? `${original}${sin.poster_path}`:unavailable} /> 
  
  <div key={sin.vote_average} className='ml-2 hover:bg-sky-900 duration-200 '>
    <h1 className='text-center mb-3 font-bold text-4xl'><i className='text-red-600'>TITLE:</i> {sin.title}</h1>
    <h1 className='lg:text-2xl lg:leading-9 '> <i className='font-bold lg:text-3xl text-red-600'>REVIEW:</i> {sin.overview}</h1>
    <h1 className='lg:text-2xl m-3 md:text-2xl'> <i className='font-bold lg:text-3xl text-red-600 '>RELEASE-DATE:</i>  {sin.release_date}</h1>
    <h1 className='font-bold flex text-3xl'><i className='lg:text-3xl text-red-600 '>RATING:</i> <i className='flex items-center px-3'>  <BsStarFill color='yellow' className='mr-2' />  {sin.vote_average}</i></h1>

  </div>
</div>



      </div>
   <a  className='flex items-center font-bold ml-[3%] lg:ml-[8%] text-2xl w-[150px] px-3 py-1 bg-red-600 text-white   leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-300 ease-in-out '  href={`https://www.youtube.com/watch?v=${video}`}> Trailer <AiFillPlayCircle className='text-2xl lg:4xl mt-1 ml-2'/></a> 

      <div className='flex flex-col ml-4'>
       
      <div className='mt-4 lg:ml-16'>
     <Link to='/'>
     <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Home</button>
     </Link>
     <Link to='/search'>
     <button type="button" className="inline-block ml-3  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Search</button>
     </Link>
      </div>
      </div>
     
   
     
    {Swiper? <h1 className='font-bold text-4xl mt-2'>You May Also Like</h1>:null}
     
 <Swiper className='mt-5'
 modules={[Autoplay]}
      spaceBetween={0}
      Navigation={3}
      slidesPerView={6}
    autoplay={{delay:5000} }
    
    
     
    >


{person.map((data)=>{
 
  return(
    <div key={data.id} className=''>
    
    <div className=''>
  
   
    <SwiperSlide className='mb-[15px]'>
    <div onClick={()=>details(data.title)}>
    <img className='w-[120px] md:w-[200px] rounded-lg lg:w-[150px] border-2 border-white'  src={ data.poster_path? `${original}${data.poster_path}`:unavailable} />
    </div>

 
    </SwiperSlide>
   
      </div>
    </div>
  )
})}
 </Swiper>
 <div></div>
</div>


   



  )
}

export default Details