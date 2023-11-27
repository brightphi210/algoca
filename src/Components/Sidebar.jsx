import React from 'react'
import { Link } from 'react-router-dom';

import { IoIosWallet } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { MdOutlineEventNote } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";



import profile from './Images/pro.png'

const Sidebar = () => {
  return (
    <div className='bg-white w-80 h-screen pt-32 px-10 fixed z-10 max-sm:w-full max-sm:pt-28  max-sm:fixed max-sm:h-screen max-sm:z-30'>
        <div className='flex gap-3 items-center'>
            <img src={profile} alt="" className='w-12 h-12' />
            <div>
                <p className='text-base  max-sm:text-sm'>algoname</p>
                <p className='text-sm text-zinc-400'>user@email.com</p>
            </div>
        </div>

        <div className='pt-10'>
            <button className='flex items-center text-sm border border-blue-800 p-3 px-4 text-blue-800 rounded-full gap-3 w-full text-center max-sm:text-sm max-sm:w-52'>
                <IoIosWallet className='text-xl'/> Disconnect Wallet 
            </button>


            <Link to={'/createEvent'}>
                <button className='flex items-center mt-6 text-sm bg-blue-800 p-3 px-4 text-white rounded-full gap-3 w-full text-center max-sm:text-sm max-sm:w-52'>
                    <FiPlus className='text-xl'/> Create Event 
                </button>
            </Link>


            <hr className='mt-10 max-sm:mt-5'/>
        </div>


        <div className='pt-5 max-sm:p-1'>
            <Link to={'/'}>
                <p className='flex gap-3 items-center py-3 my-4 text-zinc-500 hover:bg-zinc-100 hover:text-blue-800 
                    hover:p-3 transition-all duration-300 ease-in-out cursor-pointer max-sm:text-sm'>
                    <MdOutlineEventNote className='text-xl'/> Event Feed
                </p>
            </Link>

            <Link to={'/announcement'}>
                <p className='flex gap-3 items-center py-3 my-4 text-zinc-500 hover:bg-zinc-100 hover:text-blue-800 
                    hover:p-3 transition-all duration-300 ease-in-out cursor-pointer max-sm:text-sm'>
                    <HiSpeakerphone className='text-xl'/> Annoncements
                </p>
            </Link>


            <Link to={'/scheduledEvent'}>
                <p className='flex gap-3 items-center py-3 my-4 text-zinc-500 hover:bg-zinc-100 hover:text-blue-800 
                    hover:p-3 transition-all duration-300 ease-in-out cursor-pointer max-sm:text-sm'>
                    <FaRegCalendarAlt className='text-xl'/> Scheduled Event
                </p>
            </Link>

            <Link to={'/account'}>
                <p className='flex gap-3 items-center py-3 my-4 text-zinc-500 hover:bg-zinc-100 hover:text-blue-800 
                    hover:p-3 transition-all duration-300 ease-in-out cursor-pointer max-sm:text-sm'>
                    <MdAccountCircle className='text-xl'/> My Account
                </p>
            </Link>


        <Link to={'/services'}>
            <p className='flex gap-3 items-center py-3 my-4 text-zinc-500 hover:bg-zinc-100 hover:text-blue-800 
                hover:p-3 transition-all duration-300 ease-in-out cursor-pointer max-sm:text-sm'>
                <ImSpinner9 className='text-xl'/> Services
            </p>
        </Link>

            
        </div>



        




    </div>
  )
}

export default Sidebar