import React from 'react'
import  './Header.css'
import { Link } from 'react-router-dom';

import logo from '../assets/Logo/n-text.png'
export default function Header() {
  return (
        <>

    <div className='d-flex mx-6   header'>
     <img className='n-text ms-6 mt-2 ' src={logo} alt='Logo Of Netflix'/>
    <div className='d-flex gap-3 ms-5 align-items-center nav-link'>
  {[
    { name: "Home", path: "/" },
    { name: "Shows", path: "/shows" },
    { name: "Movies", path: "/movies" },
    { name: "New & Popular", path: "/new_movies" },
    { name: "My List", path: "/cart" }
  ].map((item, index) => (
    <Link 
      to={item.path} 
      key={index} 
      className="text-white text-decoration-none"
    >
      {item.name}
    </Link>
  ))}
</div>

<div className='ms-auto me-5 inputs  '>
    <label htmlFor='search'> <i className="bi bi-search"></i></label>
    <input id='search'  className='ms-2 mt-05 me-5' type="text"/>
</div>

    </div >
      
    </>
  )
}

