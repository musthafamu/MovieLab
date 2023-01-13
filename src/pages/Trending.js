import React, { useEffect, useState } from 'react'
import { useTrending } from '../context/Trending.context'
import Singlecontent from './singlecontent'
import {Link, useNavigate } from 'react-router-dom'
import Details from '../Routes/Details'
import { AiFillFire } from "react-icons/ai";

function Trending() {
  const [id,setid]=useState('')
  const navigate=useNavigate()
  const {data,increase,decrease,page,details,Top}=useTrending()
  
  useEffect(()=>{
   
  },[page,details])
  return (
    <div className='ml-[8vh] '>
      <div className='bg-gradient-to-r from-indigo-900 to-blue-900 ml-0 rounded-[100px] m-2'>
      <h1 className='text-red-400  items-center font-bold text-3xl flex p-7'>Trending <i className='mt-1 ml-4'><AiFillFire size={40} /></i></h1>

      </div>
      <div className=' grid grid-cols-2  sm:ml-[0%] md:ml-[0%] lg:ml-[0%] lg:grid-cols-5 gap-4  md:grid-cols-3 sm:grid-cols-3'>
       {data?.map((item)=>{
       
        return(
          <div key={item.id}  className='w-[200px] hover:bg-red-900 rounded-b-lg hover:border-[5px] duration-200 hover:border-red-900'>
            <Link to={`${item.id}`}>
            
            <Singlecontent item={item} />
            
            </Link>
          </div>
        )
      })}
      </div>
      <div className='flex justify-center p-[24px] mb-'>
      <button onClick={Top} className='mr-8 font-serif bg-blue-700 pr-3 pl-3 w-[100px]'>Scroll Up</button>
  

      </div>
    </div>
  )
}

export default Trending


