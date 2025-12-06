import React, { useState, useRef } from 'react';
import useFetch from './useFetchs.jsx/useFetch';
import Header from './Header/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [data] = useFetch('enter your api');
  const nav = useNavigate();

  const clickTimer = useRef(null);

  const handleClick = (mov, index) => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
      handleDoubleClick(mov,index);
    } else {
      clickTimer.current = setTimeout(() => {
        handleSingleClick(index);
        clickTimer.current = null;
      }, 250); // 
    }
  };

  const handleSingleClick = (index) => {
    nav(`/videos/${index}`);
  };

  const handleDoubleClick = (mov) => {
axios.post('http://localhost:5000/cart',
  {
    "id":mov.imdbID,
    "Poster":mov.Poster
  })
    nav('/cart');
  };

  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className='header fixed-top '>
            <Header />
            <div className='bg-black'></div>
          </div>

          <div className='container my-10'>
            <div className="row d-flex justify-content-center ">
              {data.map((mov, index) => (
                <div
                  onClick={() => handleClick(mov, index)}
                  className="col-lg-2 col-md-3 col-sm-4 col-5 g-5"
                  key={mov.imdbID}
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
    </>
  );
}
//input set serach after understand eveyrhint especailly usepatma watch video again and again
