import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import CreateEventSide from '../Components/CreateEvent/CreateEventSide'
import CreateBody from '../Components/CreateEvent/CreateBody'

const CreateEvent = () => {
  return (
    <div className='bg-zinc-50 h-screen'>
        <Navbar />
        <div className='flex '>
          <Sidebar />
          <CreateBody />
          <CreateEventSide />
        </div>
    </div>
  )
}

export default CreateEvent