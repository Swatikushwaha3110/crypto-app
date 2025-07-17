import React from 'react'

const CartItem = () => {
  return (
    
   <div className='my-2 relative p-4 border border-gray-200 flex items-center justify-start rounded-md'>
     <img className='h-26' 
    src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" 
    alt="" />
    <div className='mx-4'>
    <h1 className='text-gray-500 font-semibold text-2xl'>Bitcoin</h1>
    <h2 className='text-gray-500 font-semibold text-xl'>Price : 123456</h2>
    <h3 className='text-gray-500 font-semibold text-lg'>Qty : 1</h3>
</div>
<button className='bg-red-500 text-white py-1 px-2 rounded-md absolute right-5 top-5'>Remove</button>
   </div>

  )
}

export default CartItem