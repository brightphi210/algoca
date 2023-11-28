import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import EvenBody from '../Components/Event/EvenBody'
import EventSide from '../Components/Event/EventSide'

import { useState } from 'react'

const Event = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className='bg-zinc-100'>
        <Navbar isOpen={menuOpen} toggleMenu={toggleMenu}/>
        <div className='flex '>
          {menuOpen && <Sidebar />}
          <div className='max-sm:hidden max-md:block max-lg:block'>
            <Sidebar />
          </div>
          <EvenBody />
        </div>
    </div>
  )
}

export default Event