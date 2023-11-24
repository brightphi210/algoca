import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import AnnounceBody from '../Components/Announcement/AnnounceBody'



const Announcement = () => {
  return (
    <div className='bg-zinc-50'>
        <Navbar />
        <div className='flex '>
          <Sidebar />
          <AnnounceBody />
        </div>
    </div>
  )
}

export default Announcement