import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Detalles from './paginas/Detalles'

const rutas = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/angurria",
    element : <Detalles/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rutas}/>
  </React.StrictMode>
)
