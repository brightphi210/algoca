import React from 'react'
import { useState } from 'react';

import { GoDotFill } from "react-icons/go";
import { FaShareAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { IoIosTimer } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { BsBrowserEdge } from "react-icons/bs";


import prof from '../Images/pro.png'
import main2 from '../Images/main2.png'
import arrow from '../Images/arrow.png'

const ScheduledEventBody = () => {

    const [isOpen2, setIsOpen2] = useState(false);
    const handleToggle2 = () => {
      setIsOpen2(!isOpen2);
    };


  return (
    <div className='pt-36 pl-96 px-20 w-full flex items-start h-screen gap-10'>
        <div className='h-220'>
            <div className='flex items-center'>
                <p className='flex items-center gap-4 text-xl font-semibold '><GoDotFill className='text-blue-800'/> Scheduled Events</p>
                <div className='flex items-center gap-4 ml-auto'>
                    <button className='bg-white p-3 px-8 rounded-full text-sm hover:bg-blue-800 hover:text-white'>All</button>
                    <button className='bg-white p-3 px-8 rounded-full text-sm hover:bg-blue-800 hover:text-white'>Recents</button>
                    <button className='bg-white p-3 px-8 rounded-full text-sm hover:bg-blue-800 hover:text-white'>Most Important</button>
                </div>
            </div>

            <p className='pt-10 text-sm text-zinc-500'>This Week</p>

            <div className='h-200 overflow-y-scroll pr-5'>
                <div className="collapse-title text-xl font-medium flex gap-8 my-5 p-8 bg-white rounded-3xl w-full">

                    <div className='col-span-1 cursor-pointer' onClick={handleToggle2}>
                        <img src={main2} alt="" className='rounded-3xl' width={500}/>
                    </div>

                    <div className='col-span-1'>
                        <p className='text-lg text-blue-950 font-semibold'>Algorand Blockchain Education & Awareness Events.</p>
                        <div className='items-end'>

                            <div className='pt-5'>
                                <p className='flex gap-3 items-center pt-6 text-xs text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                <p className='flex gap-3 items-center pt-6 text-xs text-zinc-500'><SlCalender /> 03:00pm</p>
                                <p className='flex gap-3 items-center pt-6 text-xs text-zinc-500'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>
                                <p className='flex gap-3 items-center pt-6 text-xs text-zinc-500'><SlCalender /> Virtual Call Via Google Meet</p>
                                <p className='flex gap-3 items-center pt-6 text-xs text-zinc-500'><SlCalender /> 3 Days Event</p>
                                
                            </div>
                        </div>
                        <div className=' flex gap-4 pt-10 items-center'>

                            <button className='bg-zinc-100 p-2 px-6 text-xs rounded-3xl text-blue-800'>
                                    Price: <span className='text-sm '>$Free</span>
                            </button>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer '>
                                <FaShareAlt className='text-base z-10 text-blue-800'/>
                            </div>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                <FaMoneyBillWaveAlt className='text-base z-10 text-blue-800'/>
                            </div>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                <MdDelete className='text-base z-10 text-blue-800'/>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="collapse-title text-xl font-medium flex gap-8 my-5 p-8 bg-white rounded-3xl w-full">

                    <div className='col-span-1 cursor-pointer' onClick={handleToggle2}>
                        <img src={main2} alt="" className='rounded-3xl' width={500}/>
                    </div>

                    <div className='col-span-1'>
                        <p className='text-lg text-blue-950 font-semibold'>Algorand Blockchain Education & Awareness Events.</p>
                        <div className='items-end'>

                            <div className='pt-5'>
                                <p className='flex gap-3 items-center pt-6 text-xs text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                <p className='flex gap-3 items-center pt-6 text-xs text-zinc-500'><SlCalender /> 03:00pm</p>
                                <p className='flex gap-3 items-center pt-6 text-xs text-zinc-500'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>
                                <p className='flex gap-3 items-center pt-6 text-xs text-zinc-500'><SlCalender /> Virtual Call Via Google Meet</p>
                                <p className='flex gap-3 items-center pt-6 text-xs text-zinc-500'><SlCalender /> 3 Days Event</p>
                                
                            </div>
                        </div>
                        <div className=' flex gap-4 pt-10 items-center'>

                            <button className='bg-zinc-100 p-2 px-6 text-xs rounded-3xl text-blue-800'>
                                    Price: <span className='text-sm '>$Free</span>
                            </button>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer '>
                                <FaShareAlt className='text-base z-10 text-blue-800'/>
                            </div>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                <FaMoneyBillWaveAlt className='text-base z-10 text-blue-800'/>
                            </div>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                <MdDelete className='text-base z-10 text-blue-800'/>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-white h-220 w-270 rounded-3xl p-10 px-5 '>
            {/* <div className='text-center'>
                <img src={arrow} alt="" className='m-auto pt-20 pb-8' width={60} />
                <p>Click on an event to see the full details here</p>
            </div> */}

            <div className='h-200 overflow-y-scroll px-5'>
                <div>
                    <img src={main2} alt="" className='rounded-3xl'/>
                    <p className='text-xl text-blue-950 font-semibold pt-5'>Algorand Blockchain Education & Awareness Events.</p>
                </div>

                <div className='flex items-start pt-5'>
                    <div className='flex gap-3 '>
                        <img src={prof} alt="" className='w-10 h-10'/>
                        <div>
                            <p className='text-sm'>algouser</p>
                            <p className='text-xs text-zinc-400'>Author</p>
                        </div>

                    </div>

                    <div className='flex items-center gap-3 ml-auto'>
                        <p className='text-xs text-zinc-400 flex items-start gap-2'><IoIosTimer /> Posted 5hrs ago</p>
                        <p className='text-xs text-zinc-400 flex items-start gap-2'><FaEye /> 20k Views</p>
                        <p className='text-xs text-zinc-400 flex items-start gap-2'><FaCalendarDays /> 5k Scheduled</p>
                    </div>
                </div>

                <div className='flex bg-zinc-100 p-5 rounded-2xl mt-5 items-start '>
                    <div className=''>
                        <p className='flex gap-3 items-center pt-3 text-xs text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                        <p className='flex gap-3 items-center pt-3 text-xs text-zinc-500'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>  
                        <p className='flex gap-3 items-center pt-3 text-xs text-zinc-500'><SlCalender /> 03:00pm</p>
                    </div>


                    <div className='ml-auto'>
                        <p className='flex gap-3 items-center pt-3 text-xs text-zinc-500'><SlCalender /> Virtual Call Via Google Meet</p>
                        <p className='flex gap-3 items-center pt-3 text-xs text-zinc-500'><SlCalender /> 3 Days Event</p>             
                        <p className='flex gap-3 items-center pt-3 text-xs text-zinc-500'><BsBrowserEdge /> https://LlQpnhC2OCtfUKpb9x1Ky</p>  
                                   
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default ScheduledEventBody