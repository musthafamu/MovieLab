import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {key} from '../api/request'

export const Trending=createContext()

function TrendingProvider({children}){
    const [data,setdata]=useState([])
    const [page,setpage]=useState(1)

    const increase=()=>{
        setpage(page+1)
        window.scroll(120,140)
        console.log(page)
    }
    const decrease=()=>{
        setpage(page-1)
        window.scroll(120,140)
        console.log(page)
    }
    
    
    
    console.log()
    const fetch=async()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&page=${page}`)
        setdata(res.data.results)
     
    }
    useEffect(()=>{
     fetch()
    },[page])
    const value={
        data,increase,decrease,page

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