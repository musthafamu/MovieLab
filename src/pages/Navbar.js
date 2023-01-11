import React from 'react'
import { BsSearch } from "react-icons/bs";


function Navbar() {
  return (
    <div className='one'>
        <div className='bg-black border-b-2 border-red-700 flex justify-around items-center h-[50px]  w-full lg:h-[90px] '>
            <h1 className='text-4xl font-bold lg:text-[80px]'>Movie <span className='text-red-800 '>Lab</span></h1>
            <ul className='flex'>
                <li className='mr-[40px] hover:border-b-2 hover:border-red-600 duration-100 font-bold lg:text-[20px] lg:mt-[10px] ' >Home </li>
                <li className='mr-[40px] hover:border-b-2 hover:border-red-600 duration-100 flex items-center font-bold lg-text-[20px] lg:mt-[10px]' >Search <b className='mt-1 ml-[5px]'><BsSearch/></b></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar