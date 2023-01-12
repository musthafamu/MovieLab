import axios from 'axios'
import React, { useEffect } from 'react'
 import { Link, useNavigate, useParams } from 'react-router-dom'
import { key } from '../api/request'
import { Trending, useTrending } from '../context/Trending.context'

function Details() {
  
const {data}=useTrending()
console.log(data)
const navigate=useNavigate()
const {id}=useParams()
const single=data.find(data=>data.id=== parseInt(id))
  const {overview,poster_path,media_type,vote_average,vote_count}=single
console.log(single)

  return (
    <div>Details
      <div>
        {overview}
      </div>
    </div>
  )
}

export default Details