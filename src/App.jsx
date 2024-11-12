import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Restaurants from './Components/Restaurants'
import RestaurantDetail from './Components/RestaurantDetail'
import RestaurantLayout from './Components/RestaurantLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<MainLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path="restaurants" element = {<RestaurantLayout/>}>
              <Route index element = {<Restaurants/>}/>
              <Route path='details/:id' element = {<RestaurantDetail/>}/>      
            </Route>
          </Route>
      </Routes>    
    </BrowserRouter>
  )
}

export default App
