import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import requests from "../api/request";
export const Banner=createContext()


function BannerProvider({children}){
 const [banner,setBanner]=useState([])

 const fetch=async()=>{
    const res=await axios.get(requests.requestPopular)
    setBanner(res.data.results)
    

 }
 useEffect(()=>{
   fetch()
 },[])


 const value={
    banner
 }
    return(
        <div>
            <Banner.Provider value={value}>
                {children}
            </Banner.Provider>
        </div>
    )
}
export const useBanner=()=>useContext(Banner)

export default  BannerProvider