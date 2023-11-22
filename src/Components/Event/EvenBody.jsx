import React from 'react'
import { useState } from 'react';

// import { FaTelegram } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

import mainImage from '../Images/main.png'
import main2 from '../Images/main2.png'

import prof from '../Images/pro.png'
import ava1 from '../Images/Avatars.png'
import ava2 from '../Images/Avatars1.png'
import ava3 from '../Images/Avatars2.png'
import ava4 from '../Images/Avatars3.png'

const EvenBody = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div>
        <div className='pt-36 grid grid-cols-4 pl-96 px-40'>
            <div className='col-span-3 '>
                <div className='relative'>
                    <div className='w-fit h-fit '>
                        <img src={mainImage} alt="" className='rounded-3xl' />
                    </div>
                    <div className='absolute bottom-14 left-14'>
                        <p className=' text-3xl font-bold text-white'>Algorand Blockchain Education & <br /> Awareness Events.</p>
                        <div className='flex gap-4 pt-5'>
                            <p className='flex gap-3 bg-zinc-600 p-3 px-4 text-white items-center text-center rounded-3xl'><IoIosStar className='text-lg'/> Sponsored</p>
                            <p className='bg-zinc-600 p-3 px-4 text-white items-center text-center rounded-3xl'><FaShareAlt className='text-lg'/></p>
                            <p className='bg-zinc-600 p-3 px-4 text-white items-center text-center rounded-3xl'><FaLink className='text-lg'/></p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 items-center pt-5 justify-center'>
                    <p className='col-span-1 flex gap-3 items-center text-lg'><GoDotFill className='text-xl text-blue-800'/> Events</p>
                    <div className='flex gap-5 items-center w-full justify-center'>
                        <p className='bg-white p-3 px-8 rounded-3xl text-sm'>All</p>
                        <p className='bg-white p-3 px-8 rounded-3xl text-sm'>Recents</p>
                        <p className='bg-white p-3 px-8 rounded-3xl text-sm'>Most Important</p>
                    </div>
                </div>




                <div className=' my-10 bg-white p-5 rounded-3xl'>

                    <div className="collapse-title text-xl font-medium grid grid-cols-2 gap-8">

                        <div className='col-span-1 cursor-pointer' onClick={handleToggle}>
                            <img src={main2} alt="" className='rounded-3xl'/>
                        </div>

                        <div className='col-span-1'>
                            <p className='text-2xl text-blue-950 font-semibold'>Algorand Blockchain Education & Awareness Events.</p>
                            <div className='grid grid-cols-3 gap-3 items-end'>

                                <div className='pt-5 col-span-2'>
                                    <p className='flex gap-3 items-center pt-4 text-sm text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                    <p className='flex gap-3 items-center pt-4 text-sm text-zinc-500'><SlCalender /> 03:00pm</p>
                                    <p className='flex gap-3 items-center pt-4 text-sm text-zinc-500'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>
                                    <p className='flex gap-3 items-center pt-4 text-sm text-zinc-500'><SlCalender /> Virtual Call Via Google Meet</p>
                                    <p className='flex gap-3 items-center pt-4 text-sm text-zinc-500'><SlCalender /> 3 Days Event</p>
                                    
                                </div>
                                <div className='col-span-1'>
                                    <button className='bg-zinc-100 p-2 px-6 text-xs rounded-3xl text-blue-800'>
                                        Price: <span className='text-base '>$Free</span>
                                    </button>
                                </div>
                            </div>
                            <div className='grid grid-cols-4 gap-10 pt-6 items-center'>



                                <div className='flex items-center p-3 px-5 bg-zinc-100 rounded-3xl col-span-1 w-fit hover:block cursor-pointer'>
                                    <FaShareAlt className='text-base z-10'/>
                                    <button className=' text-base hidden hover:block'>share</button>
                                </div>

                                <button className='text-sm col-span-2 bg-blue-800 p-3 px-5 text-white rounded-3xl'>Add to Scheduled</button>
                            </div>
                        </div>
                    </div>


                    {isOpen && (
                        <div className="px-2">
                            <hr className='my-5'/>
                        
                            <div className='grid grid-cols-2 gap-52 items-center'>
                                <div className='flex gap-3 col-span-1'>
                                    <img src={prof} alt="" className='w-10 h-10'/>
                                    <div>
                                        <p className='text-sm'>algouser</p>
                                        <p className='text-xs text-zinc-400'>Author</p>
                                    </div>

                                </div>

                                <div className='flex items-center gap-8 col-span-1 '>
                                    <p className='text-xs text-zinc-400 flex items-start gap-2'><IoIosTimer /> Posted 5hrs ago</p>
                                    <p className='text-xs text-zinc-400 flex items-start gap-2'><FaEye /> 20k Views</p>
                                    <p className='text-xs text-zinc-400 flex items-start gap-2'><FaCalendarDays /> 5k Scheduled</p>
                                </div>
                            </div>

                            <div className='pt-5'>
                                <p className='text-sm text-justify text-zinc-500'>
                                    <b className='text-zinc-800'>Description: </b> 
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut lao ute
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet doilore ianibh magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam corper suscipit lobortis nisl dia.
                                </p>

                                <p className='text-sm pt-5'>Website Link: <span className='text-blue-600'>http//:kbhd+siaeyt3794tiguaf028yr8hufgw64</span></p>

                            </div>

                            <div className="avatar-group -space-x-4 rtl:space-x-reverse items-center pt-5">
                                <div className="avatar">
                                    <div className="w-10">
                                    <img src={ava1} alt=''/>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-10">
                                    <img src={ava2} alt=''/>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-10">
                                    <img src={ava3} alt=''/>
                                    </div>
                                </div>

                                <div className="avatar">
                                    <div className="w-10">
                                    <img src={ava4} alt=''/>
                                    </div>
                                </div>
                                <span className='pl-8 text-zinc-500'>+4 Guest Speakers</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EvenBody



