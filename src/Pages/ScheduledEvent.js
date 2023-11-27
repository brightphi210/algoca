import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import ScheduledEventBody from '../Components/Scheduled/ScheduledEventBody'

import { useState } from 'react'
const ScheduledEvent = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className='bg-zinc-100'>
        <Navbar isOpen={menuOpen} toggleMenu={toggleMenu}/>
        <div className='flex '>
          {menuOpen && <Sidebar />}
          <div className='max-sm:hidden'>
            <Sidebar />
          </div>
          <ScheduledEventBody />
        </div>
    </div>
  )
}

export default ScheduledEvent