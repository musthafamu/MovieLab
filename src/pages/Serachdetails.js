import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, parsePath, useNavigate, useParams } from 'react-router-dom'
import { key, original,unavailable } from '../api/request'
import { Serach, useSearch } from '../context/Search.context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTrending } from '../context/Trending.context';
import { AiFillPlayCircle } from "react-icons/ai";



function Serachdetails() {
        
 
  const navigate=useNavigate()
  const {fetch}=useTrending()
    const {data,search,setsearch,type}=useSearch()
    const [video,setvideo]=useState('')
    const details=(title)=>{
     navigate('/search')
     setsearch(title)
    
    }
   
    const [person,setperson]=useState([])
    const {id}=useParams()
    const moviefetch=async()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}&language=en-US&page=1`)
        setperson(res.data.results)
      }
      const videofetch=async()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${key}&language=en-US`)
        setvideo(res.data.results[0].key)
        console.log(res.data.results)
      }
      useEffect(()=>{
     moviefetch()
     fetch()
     videofetch()
      },[])

     
      const one=data.find(data=>data.id===parseInt(id))
      return (
        <div >
      <div className=''>
        <div>

        </div>
<div className='lg:flex p-3 md:flex '>
    <img className=' border-2 border-red-600 h-[400px] ml-[10%] lg:ml-[1%]  object-contain  lg:h-[500px]  lg:border-red-700 '  src={ one.poster_path? `${original}${one.poster_path}`:unavailable} /> 
 
  

  
  <div className='ml-2    hover:bg-sky-900 duration-200 '>
    <h1 className='text-center mb-3 font-bold text-4xl'>{one.title}</h1>
    <h1 className='lg:text-2xl'> <i className='font-bold lg:text-3xl'>REVIEW:</i> {one.overview}</h1>
    <h1 className='lg:text-2xl m-3 md:text-2xl'> <i className='font-bold lg:text-3xl'>RELEASE-DATE:</i>  {one.release_date}</h1>
    <h1 className='font-bold text-3xl'><i className='lg:text-3xl'>RATING:</i>  {one.vote_average}</h1>
  </div>
</div>



      </div>
   <a  className='flex items-center font-bold ml-[3%] lg:ml-[8%] text-2xl w-[150px] px-3 py-1 bg-red-600 text-white   leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-300 ease-in-out '  href={`https://www.youtube.com/watch?v=${video}`}> Trailer <AiFillPlayCircle className='text-2xl lg:4xl mt-1 ml-2'/></a> 
      <div className='flex flex-col'>

      <h1 className='font-bold text-4xl mb-2 ml-2 mt-2'>RECOMMENDATION</h1>
      <div>
     <Link to='/'>
     <button className='bg-red-700 font-bold ml-3 p-1 w-[100px] hover:bg-blue-700 duration-300 rounded-md'>Home</button>

     </Link>
     <Link to='/search'>
      <button className='bg-red-700 font-bold ml-3 p-1 w-[100px] hover:bg-blue-700 duration-300 rounded-md'>Search</button>
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

export default Serachdetails
