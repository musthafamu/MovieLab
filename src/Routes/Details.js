import axios from 'axios'
import React, { useEffect, useState } from 'react'
 import { Link, parsePath, useNavigate, useParams } from 'react-router-dom'
import { key,original,unavailable} from '../api/request'
import { Trending, useTrending } from '../context/Trending.context'
import {BsBadge4KFill,BsStarFill } from "react-icons/bs";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from '../pages/Carousel'




function Details() {
  const {page}=useTrending()
  const params=useParams()
  const id=params.id
  const [data,setdata]=useState([])
  const [video,setvideo]=useState('')
  const [person,setperson]=useState([])
  const fetch=async()=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&page=${page}`)
        setdata(res.data);
      }
      const castfetch=async()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
        console.log(res.data.cast)
  setperson(res.data.cast)
}
const videofetch=async()=>{
  const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
  setvideo(res.data.results[0].key)

}
const rating=parseInt(data.vote_average)

useEffect(()=>{
 fetch()
castfetch()
 videofetch()
},[])

const genre=data.genres
console.log(data)

  
return(
  <div key={data.id} className='ml-3 overflow-hidden'>
    <h1 className='font-bold  p-3 text-4xl'>{data.original_title}</h1>
     <div className='lg:flex  py-2 xl:flex'>
     <img className='w-[200px] lg:w-[350px] lg:h-[550px] rounded-lg ' src={ data.poster_path?`${original}${data.poster_path}`:unavailable}/>  
      <div>
     <div className='flex py-2 '>
      <h1  className='px-3'>Genre:</h1>
      {genre?genre.map((item)=>{
    return(
      <h1 className='px-1 hover:text-red-500' key={item.id}> {item.name}/</h1>
    )
      }):<p>Not available</p>}
     </div>
      <h1 className='px-3 py-2'>{data.overview}</h1>
      <h1 className='px-3'>{data.original_language}</h1>
      <h1  className='flex py-2 px-3 items-center'>{rating} <i className='ml-2'><BsStarFill color='yellow'/></i></h1>
      <h1 className='px-3 py-3'>{data.release_date}</h1>
      <div className='lg:px-[10vw] aspect-h-8 aspect-w-16 lg:aspect-h-5'>
<iframe className=''  height="200" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      
      </div>

     </div>


<h1 className='pb-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-white'>Cast</h1>
<div className=' w-full py-2' >
     <Carousel  item={person}/>

</div>
        
     </div>
    )}

export default Details
  