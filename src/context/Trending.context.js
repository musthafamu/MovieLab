import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {key} from '../api/request'
import { Link,useNavigate } from "react-router-dom";

export const Trending=createContext()

function TrendingProvider({children}){
    const [data,setdata]=useState([])
    const [type,settype]=useState('movie')
    const [page,setpage]=useState(1)
    
    const pagination=(number)=>{
         setpage(number)
        window.scroll(0,0)
    }
    const increase=()=>{
        setpage(prev=>prev+1)
  window.scroll(0,0)
    }
    const decrease=()=>{
        if(page >1){
            setpage(prev=>prev-1)
      window.scroll(0,0)
        }
    }
    const fetch=async()=>{
         const res=await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${key}&page=${page}`)
        setdata(res.data.results)
    }
    useEffect(()=>{
     fetch()
    },[page])
    const value={
        data,increase,decrease ,page, fetch,type,pagination

    }
    return(
        <div>
            <Trending.Provider value={value}>
                {children}
            </Trending.Provider>
        </div>
    )
}
export const useTrending=()=>useContext(Trending)

export default TrendingProvider