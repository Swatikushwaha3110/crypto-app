import React, { use, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const TrandingCoins = () => {

  const[trandingCoins, setTrandingCoins] = useState([])
  const[IsLoading , setIsLoading] = useState(true)
  const[IsError, setIsError] = useState(false)

  const fetchTrandingCoins  = async () =>{
    try{
      const response = await fetch("https://api.coingecko.com/api/v3/search/trending")
    const data = await response.json()
     setTrandingCoins(data.coins)
         }
     catch(error){
      setIsError(true)
     }
     finally{
      setIsLoading(false)
     }
  }

  useEffect(()=>{
     fetchTrandingCoins()
  },[])

  if(IsError){
    return(
      <h1 className='text-semibold text-center text-red-600 uppercase'>
        Something went wrong....
      </h1>
    )
  }

  if(IsLoading){
    return(
      <h1 className='text-semibold text-center text-gray-700 uppercase'>Fetching Tranding Coins...</h1>
    )
  }
  return (
    <div className='flex items-center justify-center  flex-wrap'>
       {
        trandingCoins.map((coin)=>{
          return(
             <Link to={`/coin/${coin.item.id}`} key={coin.item.id} 
            className='bg-gray-600 py-1 px-2 text-sm font-bold text-white 
            m-1 hover:bg-lime-600'>{coin.item.name}</Link>
          )
        })
       }
         </div>
  )
}

export default TrandingCoins