import axios from 'axios'
import React, { useEffect, useState } from 'react'
 import { Link, parsePath, useNavigate, useParams } from 'react-router-dom'
import { key,original} from '../api/request'
import { Trending, useTrending } from '../context/Trending.context'

function Details() {
  const {id}=useParams()
   
  const {page,data,fetch}=useTrending()


  
  
   
   
 const sin=data.find(data=>data.id===parseInt(id))
 
   
useEffect(()=>{
 fetch()
},[sin,page])
  return (
    <div>
      <div>
          {sin.id}
      </div>
    </div>
  )
}

export default Details