import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import CreateEventSide from '../Components/CreateEvent/CreateEventSide'
import CreateBody from '../Components/CreateEvent/CreateBody'
import { useState } from 'react'

const CreateEvent = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='bg-zinc-50 h-screen max-sm:h-full max-sm:bg-white'>
        <Navbar isOpen={menuOpen} toggleMenu={toggleMenu}/>
        <div className='flex '>
        {menuOpen && <Sidebar />}
          <div className='max-sm:hidden'>
            <Sidebar />
          </div>
          <CreateBody />
          {/* <CreateEventSide /> */}
        </div>
    </div>
  )
}

export default CreateEvent