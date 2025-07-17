import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
     <Link to={"/"}>
     <button className='bg-slate-600 py-2 px-6 rounded-md text-white font-bold mb-2'>Back</button>
     </Link>
  )
}

export default BackButton