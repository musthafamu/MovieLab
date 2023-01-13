import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {key} from '../api/request'
import { Link,useNavigate } from "react-router-dom";

export const Trending=createContext()

function TrendingProvider({children}){
    const [data,setdata]=useState([])
    const [scroll,setscroll]=useState()

    
    
    const Top=()=>{
        setscroll(

            window.scroll(120,140)
        )
    }
    
    

    
    
    const fetch=async()=>{

        const res=await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
        
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