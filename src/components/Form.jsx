import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const navigate = useNavigate()
  const[text, setText] = useState(""

  )

  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate(`/coins/${text}`)
  }
  return (
     <form className='p-4'onSubmit={handleSubmit}>
            <input type="text" className='border py-4 px-4 md:w-3/4 w-full bg-white border-none rounded-md md:rounded-r-none placeholder:text-sm' 
            placeholder='Search Any Coins' required onChange={e=>setText(e.target.value)} value={text}/>
            <button className='bg-green-500 py-4 px-4 md:w-1/4 w-full text-white border-none rounded-md md:rounded-l-none'>Search</button>
        </form>
  )
}

export default Form