import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import ServicesBody from '../Components/Services/ServicesBody'

const Services = () => {
  return (
    <div className='bg-zinc-50'>
    <Navbar />
    <div className='flex '>
      <Sidebar />
      <ServicesBody />
    </div>
</div>
  )
}

export default Services