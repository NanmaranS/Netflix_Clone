import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url) {
    const[data,setData]=useState([])
    
    useEffect(()=>{
    const movies_Fetch= async ()=>{
    
      try{
    const movies_fetch= await axios.get(url)
    setData(movies_fetch.data.Search)
      }catch(err){
    console.log(err);
      }
     
    }
    movies_Fetch()
    },[])
  return (
   [data]
  )
}
