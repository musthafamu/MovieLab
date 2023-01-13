import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BsSearch } from "react-icons/bs";
import {Link,useNavigate} from 'react-router-dom'
import { key,original,unavailable } from '../api/request'
import {BsBadge4KFill,BsStarFill } from "react-icons/bs";
import { useTrending } from '../context/Trending.context';
import { useSearch } from '../context/Search.context'

function Search() {
const {fetch}=useTrending()
const {onchange,search,data}=useSearch()
// 
  const navigate=useNavigate()
  
  useEffect(()=>{
 fetch()
  },[search])
  return (
    <div className=' '>
      <div className='  '>
  <input placeholder='Search'  value={search} onChange={onchange}  className='w-full
    bg-blue-800/60
      px-4
      py-2
      text-base
      border border-gray-300
      rounded
      outline-none
      focus:ring-blue-500 focus:border-blue-900 border-3 focus:ring-1 mt-3
' />
      {/* <img className='w-[200px]' src={`${original}${item.poster_path}`}/> */}

</div>
 <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 md:grid-cols-3 sm:grid-cols-3'>
  {data&&data?.map((item)=>{
    const {id}=item
     return (
      <Link to={`${id}`}>
      
      
      <div key={item.id}   className=' w-[200px] hover:bg-red-900 rounded-b-lg hover:border-[5px] duration-200 hover:border-red-900'>
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