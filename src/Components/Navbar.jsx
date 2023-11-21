import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import proImage from './Images/pro.png'

const Navbar = () => {
  return (
    <div className='grid grid-cols-4 px-20 py-5 bg-white'>
        <div className='col-span-3 flex gap-20'>
            <h2>Algocal</h2>
            <div><input type="text" placeholder='Search for events here' /></div>
        </div>

        <div className='col-span-1 flex gap-20'>
            <div>
                <p>Nigeria</p>
            </div>

            <div className='flex items-end'>
                <IoIosNotificationsOutline />
                <p>Notification</p>
            </div>

            <div className='flex items-center'>
                <img src={proImage} alt="" className='w-8 h-8'/>
                <p>algoname</p>
                <FaCaretDown />
            </div>
        </div>  
    </div>
  )
}

export default Navbar