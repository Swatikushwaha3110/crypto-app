import React, { useState } from 'react'
import CoinCard from '../components/CoinCard'
import BackButton from '../components/BackButton'

const AllCoins = () => {
  let theme = true
   const[isLoading, setIsLoading] = useState(false)
   const[isError, setIsError] = useState(false)
   const[coins, setCoins] = useState([])

    if(isError){
      return(
     <div className={theme ? 'bg-gray-900 min-h-screen px:8 md:px-16 py-16' : 'bg-white min-h-screen p-8'}>
        <h1 className='text-red-500 text-center p-4 text-2xl text-bold'>
          404 Coin Not Found!!</h1>
    </div>
   )}

 if(isLoading){
  return(
     <div className={theme ? 'bg-gray-900 min-h-screen px:8 md:px-16 py-16' : 'bg-white min-h-screen p-8'}>
        <h1 className='text-gray-500 text-center p-4 text-2xl text-bold'>
         Searching...</h1>
    </div>
   )}
  

  return (
   <div className={theme ? 'bg-gray-900 min-h-screen px:8 md:px-16 py-16' : 
   'bg-white min-h-screen p-8'}>
    <BackButton/>
        <h1 className='text-gray-500 text-center p-4 text-2xl text-bold'>
          Search Your Result</h1>
          <div className='my-8 grid grid-col-1 md:grid-cols-4 gap-4'>
         <CoinCard/>
         <CoinCard/>
         <CoinCard/>
         <CoinCard/>
         <CoinCard/>
         <CoinCard/>
          </div>
    </div>
  )
}

export default AllCoins