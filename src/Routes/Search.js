import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BsSearch } from "react-icons/bs";
import {Link,useNavigate} from 'react-router-dom'
import { key,original,unavailable } from '../api/request'
import {BsBadge4KFill,BsStarFill } from "react-icons/bs";
import { useTrending } from '../context/Trending.context';
import { Serach, useSearch } from '../context/Search.context'

function Search() {
const {fetch,Top}=useTrending()
const {onchange,search,setsearch ,data,movie,tv,toggle,handlesubmit}=useSearch()

       

  const navigate=useNavigate()
  
  useEffect(()=>{
 fetch()
  },[search,tv])
  return (
    <div className=' '>
     
      <div className='text-center  '>


        <form onSubmit={handlesubmit}>
  <input placeholder='Search' value={search}  onChange={handlesubmit} className=' bg-blue-800/60 px-4
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
      {/* <img className='w-[200px]' src={`${original}${item.poster_path}`}/> */}
   

   <div className='mb-4'>

 {!toggle?<button className='bg-blue-800 font-bold w-[130px] py-1 rounded-sm' onClick={()=>movie('movie')}> Movie</button>:
 
  <button className='bg-blue-800 py-1 w-[130px] font-bold rounded-sm' onClick={()=>tv('tv')}>Show</button>
 }

   </div>

 
</div>
 <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 md:grid-cols-4  sm:grid-cols-3'>
  {data&&data?.map((item)=>{
    const {id}=item
     return (
      <Link key={item.id} to={`${id}`}>
      
      
      <div   className=' w-[200px] hover:bg-red-900 rounded-b-lg hover:border-[5px] duration-200 hover:border-red-900'>
        <img className='w-[200px]' src={ item.poster_path? `${original}${item.poster_path}`:unavailable}/>
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

 { search&& search.includes(data)?  <p>Not Found</p>:null}
 
</div>
  

 
 
 

  )
}


export default Search