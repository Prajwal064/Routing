import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-red-700 mb-4 underline'>
      <h2>Navbar</h2>
      <input className='border-2 ' type="text" name="" id="" />
      <div className='flex gap-8'>
        <NavLink to='/home'> Home</NavLink>
        <NavLink to='/about'> About</NavLink>
        <NavLink to='/product'> Product</NavLink>
        <NavLink to='/course'> Course</NavLink>
      </div>
    </div>
  )
}

export default Navbar



