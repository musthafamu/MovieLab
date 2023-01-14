import React, { useEffect, useState } from 'react'
import { useTrending } from '../context/Trending.context'
import Singlecontent from './singlecontent'
import {Link, useNavigate } from 'react-router-dom'
import Details from '../Routes/Details'
import { AiFillFire } from "react-icons/ai";

function Trending() {
  const [id,setid]=useState('')
  const navigate=useNavigate()
  const {data,Top}=useTrending()
  
  useEffect(()=>{

  },[data])

  return (
    <div className='lg:ml-[8vh] ml-[1vw] '>
      <div className='bg-gradient-to-r  from-indigo-900 to-blue-900  rounded-[100px] mt-3 mb-3 lg:text-center  '>
      <h1 className='text-red-600 ml-[15vw] md:ml-[30vw] lg:ml-[35vw] font-bold text-5xl flex p-7'>Trending <i className='mt-1 ml-4'><AiFillFire size={50} /></i></h1>
         
      </div>
      <div className=' grid grid-cols-2 gap-10  sm:ml-[0%] md:ml-[0%] lg:ml-[0%] lg:grid-cols-5 lg:gap-4 md:gap-4  md:grid-cols-3 sm:grid-cols-3'>
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
      <button onClick={Top}  className='lg:mr-8 md:mr-8 font-serif bg-blue-700 pr-3 pl-3 w-[100px]'>Scroll Up</button>
  

      </div>
    </div>
  )
}

export default Trending


