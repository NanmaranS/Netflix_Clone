
import Header from '../Header/Header'
import useFetch from '../useFetchs.jsx/useFetch'
import { useNavigate } from 'react-router-dom';

export default function Movies() {
  const [data]=useFetch('https://www.omdbapi.com/?apikey=8874e9a8&s=game&type=movie&page=2')
  const nav=useNavigate()
  const  handleCard= (mov, index) => {
  // pass the video id (or index) in URL
  nav(`/videos/${index}`);}
   return (
      <>
      
      <div className='header fixed-top '><Header/>  
      <div className='bg-black'>   
      <h1 className='text-white ms-5 '>Movies</h1>
  </div></div>  
  
      <div className='container my-10'>
        <div className="row d-flex justify-content-center ">
      {data.map((mov,index)=>(
        <div onClick={()=>{handleCard(mov,index)}} className=" col-lg-2  col-md-3 col-sm-4 col-5 g-5  " key={mov.imdbID}>
          <div className='img-wrapper'>
  <img src={mov.Poster} className="card-img  "  alt='Images Of Shows'/>
        </div>
  </div>
        
      ))}  
      <div>
        </div>
      </div></div>
   </>)
  }
