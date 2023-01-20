import React from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=''>
        <div className='bg-black border-b-2 border-red-700 flex lg:pb-3 justify-around items-center w-full p-3   lg:w-full md:w-full   lg:h-[90px] '>
            <h1 className='text-4xl font-bold lg:text-[80px] whitespace-nowrap '>Movie <span className='text-red-600 '>Lab</span></h1>
            <ul className='flex justify-between'>
                <li className='lg:mr-[40px] md:mr-[40px]  hover:border-b-2 hover:border-red-600 duration-100 font-bold lg:text-[20px] lg:mt-[10px] mx-4 ' > <Link to='/'> Home</Link> </li>
                <li className='lg:mr-[40px] md:mr-[40px]  hover:border-b-2 hover:border-red-600 duration-100 font-bold lg:text-[20px] lg:mt-[10px] mx-4 ' > <Link to='/search'> Search</Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar