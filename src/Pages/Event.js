import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import EvenBody from '../Components/Event/EvenBody'
import EventSide from '../Components/Event/EventSide'

const Event = () => {
  return (
    <div className='bg-zinc-100 h-screen'>
        <Navbar />
        <div className='flex '>
          <Sidebar />
          <EvenBody />
          <EventSide />
        </div>
    </div>
  )
}

export default Event