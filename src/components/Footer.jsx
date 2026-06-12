import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='flex align-items:center justify-content:space-between'>
        <h2 className='text-3xl'>Footer</h2>
        <button onClick={()=>{
          navigate('/product')
        }} className='bg-black rounded bottom-0 text-white'>Exlpore Us</button>
    </div>
  )
}

export default Footer