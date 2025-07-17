import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import TrandingCoins from './components/TrandingCoins'
import Footer from './components/Footer'
import AllCoins from './pages/AllCoins'
import CoinDetails from './pages/CoinDetails'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Router>
  <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/search/:coinQuery' element={<AllCoins/>}/>
  <Route path='/coin/:coinid' element={<CoinDetails/>}/>
  <Route path='/cart' element={<Cart/>}/>
 </Routes>
 <Footer/>
    </Router>
  )
}

export default App