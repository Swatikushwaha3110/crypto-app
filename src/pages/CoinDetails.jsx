import React from 'react'
import BackButton from '../components/BackButton'

const CoinDetails = () => {
    let theme = true
  return (
  <div className={theme ? 'bg-gray-900 min-h-screen px:8 md:px-16 py-16' : 
  'bg-white min-h-screen p-8 md:px-16 py-16'}>
   <BackButton/>
            <div className='border border-gray-600 p-4 rounded-sm flex items-center md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-2'>
             <div className='flex items-centre justify-center rounded-md p-4 md:w-1/3 w-full '>
             <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="" />
             </div>
             <div className='relative rounded-md p-4 md:w-2/3 w-full'>
           <h1 className='text-gray-400 text-3xl font-bold my-2'>Name : Bitcoin</h1>
             <h2 className='text-gray-400 text-2xl font-bold my-2'>Symbol : BTC</h2>
             <h3 className='text-green-400 text-xl font-bold my-2'>Price : 9415192</h3>
             <div className='bg-green-600 text-sm rounded-md text-white text-semibold text-center absolute p-1 right-4 top-4'>
                <p>Rank #1</p>
             </div>
             <p className='text-gray-400 text-sm my-2'>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aliquid, tenetur dicta repellendus est enim, ullam iure eveniet sapiente voluptatum vero debitis non et quam labore assumenda vitae. Voluptatum, dolore. 
             </p>
             <button className='bg-green-400 w-full p-2 text-white font-bold rounded-md my-4 hover:bg-green-600 duration-200'>Add to Card</button>
             </div>
            </div>
            </div>
  )
}

export default CoinDetails