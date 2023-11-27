import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import AccountBody from '../Components/Account/AccountBody'

import { useState } from 'react'

const Account = () => {

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
          <AccountBody />
        </div>
    </div>
  )
}

export default Account