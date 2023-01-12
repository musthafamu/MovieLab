import React from 'react'
import { useTrending } from '../context/Trending.context'
import Singlecontent from './singlecontent'
import { useNavigate } from 'react-router-dom'
function Trending() {
  const navigate=useNavigate()
  const {data,increase,decrease,page}=useTrending()
  const details=(id)=>{
      navigate(`${id}`)
  }
  return (
    <div className='ml-[8vh] '>
      <h1 className='text-red-400 p-7'>Trending</h1>
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 md:grid-cols-3 sm:grid-cols-3'>
       {data?.map((item)=>{
        return(
          <div key={item.id} onClick={()=>details(item.id)} className='w-[200px] hover:bg-red-900 rounded-b-lg hover:border-[5px] duration-200 hover:border-red-900'>
            <Singlecontent item={item} />
          </div>
        )
      })}
      </div>
      <div className='flex justify-center p-[24px] mb-'>
      <button onClick={decrease} className='mr-8 font-serif bg-blue-700 pr-3 pl-3 w-[100px]'>Prev</button>
    <button className='font-bold mr-7'>{page}</button>
      <button onClick={increase} className='mr-8 bg-blue-700 font-serif pr-3 pl-3 w-[100px]'>Next</button>


      </div>
    </div>
  )
}

export default Trending