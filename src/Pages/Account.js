import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import AccountBody from '../Components/Account/AccountBody'

const Account = () => {
  return (
    <div className='bg-zinc-100'>
        <Navbar />
        <div className='flex '>
          <Sidebar />
          <AccountBody />
        </div>
    </div>
  )
}

export default Account