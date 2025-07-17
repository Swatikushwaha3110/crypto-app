import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = () => {
  return (
   <div className='border border-gray-700 p-4 rounded-md flex flex-col items-center justify-between space-y-2'>
            <img className='h-36 rounded-full' src="https://coin-images.coingecko.com/coins/images/26375/standard/sui-ocean-square.png?1727791290" alt="" />
            <h1 className='text-xl text-gray-500 font-semibold'>Bitcoin</h1>
           <Link to={"/coin/bitcoin"}>
            <button className='hover:bg-green-800 bg-green-500 py-2 px-4 text-sm font-bold rounded-lg'>View Details</button>
           </Link>
           </div>
  )
}

export default CoinCard