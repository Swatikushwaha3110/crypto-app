import React from 'react'
import BackButton from '../components/BackButton'
import CartItem from '../components/CartItem'

const Cart = () => {
    let theme = true
  return (
    <div className={theme ? 'bg-gray-900 min-h-screen px:8 md:px-16 py-16' : 
  'bg-white min-h-screen p-8 md:px-16 py-16'}>
   <BackButton/>
   <h1 className='text-center text-2x font-bold text-gray-500 my-4'>
    Your Cart</h1>
    <div className='border border-gray-300 p-4 rounded-sm grid grid-cols-3 gap-4'>
    <div className="col-span-2">
      <CartItem/>
     <CartItem/>
      <CartItem/>
       <CartItem/>
    </div>
       <div className='border border-gray-600 p-4 rounded-md my-2 col-span-1'>
        <h1 className='text-gray-400 text-xl font-bold my-2'>Your Bill :</h1>
        <h1 className='text-gray-400 text-2xl font-bold my-2'>Your Items : 2</h1>
        <h1 className='text-gray-400 text-2xl font-bold my-2'>Total Amount :10000</h1>
        <button className='hover:bg-emerald-900 duration-200 hover:cursor-pointer bg-emerald-400 py-2 px-6 rounded-md w-full my-4 text-white font-bold'>Pay Now</button>
       </div>
       </div>
       
   </div>
  )
}

export default Cart