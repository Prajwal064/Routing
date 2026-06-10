import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes  } from 'react-router-dom'
import  Home  from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import RandomAbout from './pages/RandomAbout'
import { Product } from './pages/Product'
import AnyCourses from './pages/AnyCourses'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<RandomAbout/>}/>
        <Route path='/course' element={<AnyCourses/>}/>
        <Route path='/course/:id' element={<AnyCourses/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
 
    </div>
  )
}

export default App