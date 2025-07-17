import React from 'react'
import Form from '../components/Form'
import TrandingCoins from '../components/TrandingCoins'

const Home = () => {
  let theme = true
  return (
    <div className={theme ? 'bg-gray-900 min-h-screen px:8 md:px-16 py-16' : 'bg-white min-h-screen p-8'}>
        <h1 className='text-gray-500 text-center p-4 text-4xl text-bold'>We Are World's Best Tranding Market</h1>
        <p className='text-gray-500 text-center py-4 text-xs'>Now Serach And Get Industy Insight of Crypto World In Your FingerPrints</p>
     <Form/>
     <TrandingCoins/>
    </div>
  )
}

export default Home