import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BsSearch } from "react-icons/bs";
import {Link,useNavigate} from 'react-router-dom'
import { key,original,unavailable } from '../api/request'
import {BsBadge4KFill,BsStarFill } from "react-icons/bs";
import { useTrending } from '../context/Trending.context';
import { GrCheckboxSelected } from "react-icons/gr";
import { useSearch } from '../context/search.context';
import Singlesearch from '../pages/singlesearch';
function Search() {
  const {Search,data,setquery,query,handlesubmit}=useSearch()
return(

<div className='flex flex-col justify-center items-center '>
<div className=' '>


<form >
<input placeholder='Search Your Favorite Movie' onChange={handlesubmit} className=' bg-blue-800/60 px-4
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

</div>

<div className='grid grid-cols-1   max-w-[1640px]  overflow-hidden lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-3 '>
  {data&&data.map((item)=>{
    return(
      <div key={item.key}>
        <Link to={`/${item.id}`}>
        
        <Singlesearch item={item}/>
        </Link>

        </div>
    )
  })}
</div>
{query&&query.includes(data)? <p className='font-bold text-center text-4xl lg:mt-[13vw] mt-[30vw]'>Not Found 😒</p>:''}
</div>



)}
export default Search