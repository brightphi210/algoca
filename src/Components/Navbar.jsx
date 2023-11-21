import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import proImage from './Images/pro.png'

const Navbar = () => {
  return (
    <div className='grid grid-cols-3 px-20 py-5 bg-white items-center'>
        <div className='col-span-2 flex gap-20'>
            <h2>Algocal</h2>
            <div><input type="text" placeholder='Search for events here' /></div>
        </div>

        <div className='col-span-1 flex gap-20 items-center'>
            <div className='bg-zinc-200 p-3'>
                <p>Nigeria</p>
            </div>

            <div className='flex items-center bg-zinc-200 p-3'>
                <IoIosNotificationsOutline />
                <p className='text-lg'>Notification</p>
            </div>

            <div className='flex items-center gap-5'>
                <img src={proImage} alt="" className='w-8 h-8'/>
                <p className='flex items-center '>algoname <FaCaretDown /></p>
                
            </div>
        </div>  
    </div>
  )
}

export default Navbar