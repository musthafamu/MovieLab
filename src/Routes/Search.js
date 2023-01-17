import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BsSearch } from "react-icons/bs";
import {Link,useNavigate} from 'react-router-dom'
import { key,original,unavailable } from '../api/request'
import {BsBadge4KFill,BsStarFill } from "react-icons/bs";
import { useTrending } from '../context/Trending.context';
import { Serach, useSearch } from '../context/Search.context'
import { GrCheckboxSelected } from "react-icons/gr";

function Search() {
const {fetch,Top}=useTrending()
const {onchange,search,setsearch ,data,movie,tv,toggle,handlesubmit,details}=useSearch()

       

  const navigate=useNavigate()
  
  useEffect(()=>{
 fetch()
  },[search,tv])
  return (
    <div className=' '>
     
      <div className='text-center  '>


        <form >
  <input placeholder='Search'   onChange={handlesubmit} className=' bg-blue-800/60 px-4
      lg:w-[400px]
      w-[250px]
      md:w-[300px]
      py-2
      mb-4
      text-base
      border border-gray-300
      rounded
      outline-none
      focus:ring-blue-500 focus:border-blue-900 border-3 focus:ring-1 mt-3
' />



        </form>
   
   <div className='mb-4 font-bold '>

{toggle==false&&!toggle?<button className='mx-3 py-2.5 bg-red-700 inline-block px-6 py-bg2.5  text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg   focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out' onClick={()=>movie('tv')}>Tv</button>:<button onClick={()=>movie('tv')} className='mx-3   bg-red-80 inline-block px-6 py-2.5 bg-blue-600  text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out'> Tv</button>}
{!toggle &&toggle==false?<button onClick={()=>movie('movie')} className='  mx-3 inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out '>Movie</button>:<button className='mx-3 bg-red-80 inline-block px-6 py-2.5 bg-red-600  text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out' onClick={()=>tv('movie')}>Movie</button>}



   </div>

 
</div>
 <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 md:grid-cols-4  sm:grid-cols-3'>
  {data&&data?.map((item)=>{
    const {id}=item
     return (
      <Link key={item.id} to={`${id}`}>
      
      
      <div   className=' w-[200px] hover:bg-red-900 rounded-b-lg hover:border-[5px] duration-200 hover:border-red-900'>
        <img className=' w-[200px]' src={ item.poster_path? `${original}${item.poster_path}`:unavailable}/>
        <div className='flex justify-around font-serif'>
          <p>{item.title}</p>
         <div className='flex items-center' >  <i className='mr-2'><BsStarFill color='yellow'/></i>    {item.vote_average}</div>
  
        
        </div>
        <div className='text-center font-serif'>{item.release_date}</div>

      </div>
      
      </Link>
    )
  })}

 </div>

 { search&&  search.includes(data)?  <p className='font-bold text-center text-4xl lg:mt-[13vw] mt-[30vw]'>Not Found 😒</p>:null}
 
</div>
  

 
 
 

  )
}


export default Search