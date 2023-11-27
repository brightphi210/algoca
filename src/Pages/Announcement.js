import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import AnnounceBody from '../Components/Announcement/AnnounceBody'
import { useState } from 'react'



const Announcement = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='bg-zinc-50'>
        <Navbar isOpen={menuOpen} toggleMenu={toggleMenu}/>
        <div className='flex '>
          {menuOpen && <Sidebar />}
          <div className='max-sm:hidden'>
            <Sidebar />
          </div>
          <AnnounceBody />
        </div>
    </div>
  )
}

export default Announcement