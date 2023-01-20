import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { key } from "../api/request";
import { useTrending } from "./Trending.context";


export const Search=createContext()


function SearchProvider({children}){
    const [data,setdata]=useState([])
  const [type,settype]=useState('movie')
    const [query,setquery]=useState('')
    const handlesubmit=async(e)=>{
    setquery(e.target.value)
        await axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=${key}&language=en-US&query=${e.target.value}&page=1&include_adult=false`).then((res)=>{
            setdata(res.data.results)
         })  
   }
   
    useEffect(()=>{
   handlesubmit()
    },[query])
    
    const value={
        data,setquery,handlesubmit,query
    }
    return(
        <div>
            <Search.Provider value={value}>
                {children}
            </Search.Provider>
        </div>
    )
}
export const useSearch=()=>useContext(Search)
export default SearchProvider