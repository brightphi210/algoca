import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import ServicesBody from '../Components/Services/ServicesBody'
import { useState } from 'react'
const Services = () => {
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
      <ServicesBody />
    </div>
</div>
  )
}

export default Services