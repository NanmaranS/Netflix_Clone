import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const[cart,setCart]=useState([])


  useEffect(()=>{
    axios.get('http://localhost:5000/cart')
    .then((res)=>setCart(res.data))
  },[])

const nav=useNavigate()

const handleCart=(index)=>{
  nav(`/videos/${index}`)
}
  return (
  <>
        
  
     {cart.length > 0 ? (
            <div>
              <div className='header fixed-top '>
                <Header />
                <div className='bg-black'></div>
              </div>
    
              <div className='container my-10'>
                <div className="row d-flex justify-content-center ">
                  {cart.map((mov, index) => (
                    <div
                      onClick={() => handleCart(index)}
                      className="col-lg-2 col-md-3 col-sm-4 col-5 g-5"
                      key={mov.id}
                    >
                      <div className='img-wrapper'>
                        <img src={mov.Poster} className="card-img" alt='Images Of Shows' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <h2>Loading</h2>
          )}
   </>)  
}
