import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourses = () => {
    const params = useParams()
    console.log(params);
    
  return (
    <div className='bg-black min-h-screen min-w-screen justify-center flex items-center text-center p-20 text-white'>{params.id} Course page</div>
  )
}

export default AnyCourses