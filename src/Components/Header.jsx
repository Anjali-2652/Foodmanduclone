import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    
    <div className='bg-white flex justify-between p-4 shadow-lg'>
     <Link to ="/">
      <img className='h-16 ml-10 w-20 rounded-full' src="https://img.freepik.com/premium-photo/indian-food-curry-butter-chicken_786587-660.jpg?semt=ais_hybrid"/>
    </Link>
       <div className='flex  items-center gap-4 mr-10'> 
      <FaShoppingCart  className='h-10  w-10 '/>
      <h1 className=''>10</h1>
      </div>
    

    </div>
  )
}

export default Header
