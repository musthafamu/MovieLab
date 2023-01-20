import React, { useEffect, useState } from 'react'
import { useTrending } from '../context/Trending.context'
import Singlecontent from './singlecontent'
import {Link, useNavigate } from 'react-router-dom'
import Details from '../Routes/Details'
import { AiFillFire } from "react-icons/ai";

function Trending() {
 
 
  const {data,page,increase,decrease,pagination}=useTrending()
 
  
  
  return (
    <div className='flex flex-col  items-center '>
      <div className='flex justify-center rounded-[100px]  w-full bg-gradient-to-r from-blue-600 to-violet-600'>
      <h1 className='flex py-7 items-center font-serif text-5xl'>Trending <i className='mt-1 ml-4'><AiFillFire color='yellow' size={50} /></i></h1>
      </div>
      <div className='flex items-center  justify-evenly'>
       </div>
      <div  className='  grid  grid-cols-1  max-w-[1640px]  overflow-hidden lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-1  '>
      {
        data?data.map((item)=>{
          
          return(
            <Link to={`/${item.id}`}>
            <Singlecontent key={item.id} item={item} />
            </Link>
          )
        }):<p>Loading</p>
      }
    </div>
    <div className='flex justify-center  mb-4 mt-4'>
      <button onClick={decrease} className='px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Prev</button>
      <button onClick={()=>pagination(1)} className='px-2.5 py-2 mx-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>1</button>
      <button onClick={()=>pagination(2)} className='px-2.5 py-2 mx-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>2</button>
      <button onClick={()=>pagination(3)} className='px-2.5 py-2 mx-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>3</button>
      <button onClick={()=>pagination(4)} className='px-2.5 py-2 mx-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>4</button>
      <button onClick={increase} className='px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Next</button>
    </div>
    </div>
  )
}

export default Trending


