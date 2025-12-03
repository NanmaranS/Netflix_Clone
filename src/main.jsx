import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Shows from './Pages/Shows.jsx'
import Movies from './Pages/Movies.jsx'
import New_Popular from './Pages/New_Popular.jsx'
import Cart from './Pages/Cart.jsx'
import Videos from './Videos.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:'/shows',
    element:<Shows/>
  },
  {
    path:'/movies',
    element:<Movies/>
  },{
    path:'/new_movies',
    element:<New_Popular/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }
,{
  path:"/videos/:id",
  element:<Videos/>
}

])
createRoot(document.getElementById('root')).render(

 <RouterProvider router={router}/>
  
  
)
