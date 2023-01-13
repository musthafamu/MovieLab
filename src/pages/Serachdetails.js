import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, parsePath, useNavigate, useParams } from 'react-router-dom'
import { key, original,unavailable } from '../api/request'
import { useSearch } from '../context/Search.context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




function Serachdetails() {
        
 
  const navigate=useNavigate()

    const {data}=useSearch()
    console.log(data)
    const [person,setperson]=useState([])
    const {id}=useParams()
    const moviefetch=async()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}&language=en-US&page=1`)
        setperson(res.data.results)
      }
      useEffect(()=>{
     moviefetch()
      },[])

      console.log(person)
      const one=data.find(data=>data.id===parseInt(id))
      return (
        <div >
      <div className=''>
<div className='lg:flex p-3 md:flex '>
    <img className='w-[400px] h-[400px] ml-[10%] lg:ml-[1%]  object-contain  lg:h-[500px] lg:w-[500px]  '  src={ one.poster_path? `${original}${one.poster_path}`:unavailable} /> 
  
  <div className='ml-2 '>
    <h1 className='text-center mb-3 font-bold text-4xl'>{one.title}</h1>
    <h1 className='lg:text-2xl'> <i className='font-bold lg:text-3xl'>REVIEW:</i> {one.overview}</h1>
    <h1 className='lg:text-2xl m-3 md:text-2xl'> <i className='font-bold lg:text-3xl'>RELEASE-DATE:</i>  {one.release_date}</h1>
    <h1 className='font-bold text-3xl'><i className='lg:text-3xl'>RATING:</i>  {one.vote_average}</h1>
  </div>
</div>



      </div>
      <div className='flex flex-col'>

      <h1 className='font-bold text-4xl mt-2'>RECOMMENDATION</h1>
      <div>
     <Link to='/'>
      <button className='bg-red-700 p-1 m-3 w-[100px]  rounded-md '>Home</button>
     </Link>
     <Link to='/search'>
      <button className='bg-red-700 ml-3 p-1 w-[100px] rounded-md'>Search</button>
     </Link>
      </div>
      </div>

 <Swiper className='mt-5'
      spaceBetween={0}
      slidesPerView={6}
     
    >


{person.map((data)=>{
 
  return(
    <div key={data.id} className=''>
    
    <div className=''>
  
   
    <SwiperSlide className=''>
    <img className='w-[120px] md:w-[200px] rounded-lg lg:w-[150px] border-2 border-white'  src={ data.poster_path? `${original}${data.poster_path}`:unavailable} />
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

export default Serachdetails
