import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {key} from '../api/request'
import { Link,useNavigate } from "react-router-dom";

export const Trending=createContext()

function TrendingProvider({children}){
    const [data,setdata]=useState([])
    const [type,settype]=useState('')
   
    const navigate=useNavigate()
    const Top=()=>{
     
        window.scroll(120,140)
     
    }
    
    

    
    console.log()
    const fetch=async()=>{

        // const res=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&page=1`)
        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        
        setdata(res.data.results)
     
    }
    useEffect(()=>{
     fetch()
    },[data])
    const value={
        data,Top, fetch

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