import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let theme = true
    let user = true
  return (
    <div className={theme ? 'bg-gray-900 py-4 px-8 md:px-16 border-b border-gray-100 shadow-2xl flex items-center justify-between' 
    : 'bg-gray-200 py-4 px-8 md:px-16 shadow-lg '}>
       <Link to={"/"}>
         <h1 className={theme ? 'text-white font-black font-2xl' : 'text-black font-black font-2xl'}>Crypto<span className='text-red-500'>DCX</span> </h1>
       </Link>
     <div>

      {
        !user? (
          <>
      <button 
      className='bg-blue-600 py-1 text-white px-4 text-sm 
      font-bold mx-2 rounded-lg text-white'>Sign in</button>
      <button 
      className='bg-blue-600 py-1 text-white px-4 text-sm 
      font-bold mx-2 rounded-lg text-white'>Sign up</button>
          </>
        ): 
        <>
      <Link to={`/cart`}>
      <button className='bg-green-600 py-1 text-white 
      px-4 text-sm font-bold mx-2 rounded-lg'>Card(0)</button>
      </Link>
      <button className='bg-red-600 py-1 text-white px-4 
      text-sm font-bold mx-2 rounded-lg text-white'>Logout</button>
        </>
      }
       

     </div>
    </div>
  )
}

export default Navbar