import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";


import proImage from './Images/pro.png'
import flag from './Images/flag.png'

const Navbar = () => {
  return (
    <div className='grid grid-cols-3 px-20 py-5 bg-white items-center'>
        <div className='col-span-2 flex gap-20 items-center'>
            <h2>Algocal</h2>
            <div className='flex items-center relative'>
                <input type="text" placeholder='Search for events here' className='bg-zinc-100 p-3 px-5 w-96 rounded-3xl'/>
                <FiSearch   className='absolute top-4 right-8 text-xl'/>
            </div>
        </div>

        <div className='col-span-1 flex gap-10 items-center'>
            <div className='flex gap-3 bg-zinc-100 p-3 px-6 rounded-3xl'>
                <img src={flag} alt="" className='w-6 h-6'/>
                <p className='text-sm'>Nigeria</p>
            </div>

            <div className='flex gap-2 items-center bg-zinc-100 p-3 px-6 rounded-3xl'>
                <IoMdNotificationsOutline  className='text-xl'/>
                <p className='text-sm'>Notifications</p>
            </div>

            <div className='flex items-center gap-5 border-l-2 pl-3'>
                <img src={proImage} alt="" className='w-8 h-8'/>
                <p className='flex items-center text-sm'>algoname <FaCaretDown /></p>
            </div>
        </div>  
    </div>
  )
}

export default Navbar