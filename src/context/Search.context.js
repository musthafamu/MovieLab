import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { key } from "../api/request";
import { useParams } from "react-router-dom";

export const Serach=createContext()


function SerachProvider({children}){
    const [data,setdata]=useState([])
    const [search,setsearch]=useState('')
    const [type,settype]=useState('movie')
    const [toggle,settoggle]=useState(false)
    const tv=(tv)=>{
        settype(tv)
        settoggle(false)
    }
    const movie=(movie)=>{
        settype(movie)
        settoggle(true)
    }
  
    
    
     
    const onchange=(e)=>{
       setsearch(e.target.value)
    
       axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=${key}&language=en-US&query=${e.target.value}&page=page1&include_adult=false`).then((res)=>{
       setdata(res.data.results)
      
       })
    }
    const value={
        onchange,search,data,search,setsearch,movie,tv,toggle
        
    }
    return(
        <div>
            <Serach.Provider value={value}>
                {children}
            </Serach.Provider>
        </div>
    )
}
export const useSearch=()=>useContext(Serach)
export default SerachProvider