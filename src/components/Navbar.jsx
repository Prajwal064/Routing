import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-red-700 mb-4 underline'>
      <h2>Navbar</h2>
      <input className='border-2 ' type="text" name="" id="" />
      <div className='flex gap-8'>
        <Link to='/home'> Home</Link>
        <Link to='/about'> About</Link>
        <Link to='/product'> Product</Link>
        <Link to='/course'> Course</Link>
      </div>
    </div>
  )
}

export default Navbar



