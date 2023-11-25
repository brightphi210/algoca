import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import ScheduledEventBody from '../Components/Scheduled/ScheduledEventBody'
const ScheduledEvent = () => {
  return (
    <div className='bg-zinc-50'>
        <Navbar />
        <div className='flex '>
          <Sidebar />
          <ScheduledEventBody />
        </div>
    </div>
  )
}

export default ScheduledEvent