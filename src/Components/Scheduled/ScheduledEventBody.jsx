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
import { FaRegDotCircle } from "react-icons/fa";

import prof from '../Images/pro.png'
import main2 from '../Images/main2.png'
import arrow from '../Images/arrow.png'


import ava1 from '../Images/Avatars.png'
import ava2 from '../Images/Avatars1.png'
import ava3 from '../Images/Avatars2.png'
import ava4 from '../Images/Avatars3.png'

const ScheduledEventBody = () => {

    const [isOpen2, setIsOpen2] = useState(false);
    const handleToggle2 = () => {
      setIsOpen2(!isOpen2);
    };


    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }


  return (
    <div className='pt-36 pl-96 px-20 w-full flex items-start h-screen gap-10 max-sm:gap-0 max-sm:px-4 max-sm:w-screen max-sm:pt-24 max-sm:h-full max-sm:block'>
        <div className='h-220 max-sm:h-fit'>
            <div className='flex items-center max-sm:block'>
                <p className='flex items-center gap-4 text-xl font-semibold max-sm:text-sm'><GoDotFill className='text-blue-800'/> Scheduled Events</p>
                <div className='flex items-center gap-4 ml-auto max-sm:gap-3 max-sm:mt-5'>
                    <button className='bg-white p-3 px-8 max-sm:px-5 rounded-full text-sm hover:bg-blue-800 hover:text-white max-sm:text-xs'>All</button>
                    <button className='bg-white p-3 px-8 max-sm:px-5 rounded-full text-sm hover:bg-blue-800 hover:text-white max-sm:text-xs'>Recents</button>
                    <button className='bg-white p-3 px-8 max-sm:px-5 rounded-full text-sm hover:bg-blue-800 hover:text-white max-sm:text-xs'>Most Important</button>
                </div>
            </div>

            <p className='pt-10 text-sm text-zinc-500 max-sm:py-5'>This Week</p>

            <div className='h-200 overflow-y-scroll pr-5 max-sm:p-0 max max-sm:hidden'>
                <div className="collapse-title text-xl font-medium flex gap-8 my-5 p-8 bg-white rounded-3xl w-full max-sm:block max-sm:p-5">

                    <div className=' cursor-pointer' onClick={handleShow}>
                        <img src={main2} alt="" className='rounded-3xl' width={500}/>
                    </div>

                    <div className=''>
                        <p className='text-lg text-blue-950 font-semibold max-sm:text-sm pt-3'>Algorand Blockchain Education & Awareness Events.</p>
                        <div className='items-end'>

                            <div className='pt-4'>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500 max-sm:pt-3'><SlCalender /> Jan - 20 - 2023</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500 max-sm:pt-3'><SlCalender /> 03:00pm</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500 max-sm:pt-3'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500 max-sm:pt-3'><SlCalender /> Virtual Call Via Google Meet</p>
                                <p className='flex gap-3 items-center pt-5 text-xs text-zinc-500 max-sm:pt-3'><SlCalender /> 3 Days Event</p>
                                
                            </div>
                        </div>
                        <div className=' flex gap-4 pt-10 items-center max-sm:pt-5'>

                            <button className='bg-zinc-100 p-2 px-6 text-xs rounded-3xl text-blue-800'>
                                    Price: <span className='text-sm '>$Free</span>
                            </button>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer '>
                                <FaShareAlt className='text-base z-10 text-blue-800 max-sm:text-xs'/>
                            </div>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                <FaMoneyBillWaveAlt className='text-base z-10 text-blue-800 max-sm:text-xs'/>
                            </div>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                <MdDelete className='text-base z-10 text-blue-800 max-sm:text-xs'/>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="collapse-title text-xl font-medium flex gap-8 my-5 p-8 bg-white rounded-3xl w-full  max-sm:p-5 max-sm:hidden">

                    <div className=' cursor-pointer' onClick={handleShow}>
                        <img src={main2} alt="" className='rounded-3xl' width={500}/>
                    </div>

                    <div className=''>
                        <p className='text-lg text-blue-950 font-semibold max-sm:text-sm pt-3'>Algorand Blockchain Education & Awareness Events.</p>
                        <div className='items-end'>

                            <div className='pt-4'>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500 max-sm:pt-3'><SlCalender /> Jan - 20 - 2023</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500 max-sm:pt-3'><SlCalender /> 03:00pm</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500 max-sm:pt-3'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500 max-sm:pt-3'><SlCalender /> Virtual Call Via Google Meet</p>
                                <p className='flex gap-3 items-center pt-5 text-xs text-zinc-500 max-sm:pt-3'><SlCalender /> 3 Days Event</p>
                                
                            </div>
                        </div>
                        <div className=' flex gap-4 pt-10 items-center max-sm:pt-5'>

                            <button className='bg-zinc-100 p-2 px-6 text-xs rounded-3xl text-blue-800'>
                                    Price: <span className='text-sm '>$Free</span>
                            </button>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer '>
                                <FaShareAlt className='text-base z-10 text-blue-800 max-sm:text-xs'/>
                            </div>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                <FaMoneyBillWaveAlt className='text-base z-10 text-blue-800 max-sm:text-xs'/>
                            </div>

                            <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                <MdDelete className='text-base z-10 text-blue-800 max-sm:text-xs'/>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className='max-sm:bg-white rounded-3xl h-200 overflow-y-scroll px-5 max-sm:p-5 hidden max-sm:block'>
                    <div>
                        <img src={main2} alt="" className='rounded-3xl'/>
                        <p className='text-xl text-blue-950 font-semibold pt-5 max-sm:text-sm'>Algorand Blockchain Education & Awareness Events.</p>
                    </div>

                    <div className='flex items-start pt-5 max-sm:block'>
                        <div className='flex gap-3 '>
                            <img src={prof} alt="" className='w-10 h-10'/>
                            <div>
                                <p className='text-sm'>algouser</p>
                                <p className='text-xs text-zinc-400'>Author</p>
                            </div>

                        </div>

                        <div className='flex items-center gap-3 ml-auto max-sm:block'>
                            <p className='text-xs text-zinc-400 flex items-start gap-2 max-sm:pt-3'><IoIosTimer /> Posted 5hrs ago</p>
                            <p className='text-xs text-zinc-400 flex items-start gap-2 max-sm:pt-3'><FaEye /> 20k Views</p>
                            <p className='text-xs text-zinc-400 flex items-start gap-2 max-sm:pt-3'><FaCalendarDays /> 5k Scheduled</p>
                        </div>
                    </div>

                    <div className='flex bg-zinc-100 p-5 rounded-2xl mt-5 items-start max-sm:block'>
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

                    <div>
                        <p className='text-sm pt-4 text-zinc-500'><b>Description</b>: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum a</p>

                        <div className='flex items-center pt-5 max-sm:block'>
                            <div className=' flex gap-3 items-center max-sm:pb-5'>

                                <button className='bg-zinc-100 p-2 px-5 text-xs rounded-3xl text-blue-800'>
                                        Price: <span className='text-sm '>$Free</span>
                                </button>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer '>
                                    <FaShareAlt className='text-sm z-10 text-blue-800'/>
                                </div>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                    <FaMoneyBillWaveAlt className='text-sm z-10 text-blue-800'/>
                                </div>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                    <MdDelete className='text-sm z-10 text-blue-800'/>
                                </div>

                            </div>
                            
                            <div className="avatar-group -space-x-5 rtl:space-x-reverse items-center ml-auto">
                                    <div className="avatar">
                                        <div className="w-8">
                                        <img src={ava1} alt=''/>
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8">
                                        <img src={ava2} alt=''/>
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8">
                                        <img src={ava3} alt=''/>
                                        </div>
                                    </div>

                                    <div className="avatar">
                                        <div className="w-8">
                                        <img src={ava4} alt=''/>
                                        </div>
                                    </div>
                                    <span className='pl-8 text-zinc-500 text-xs'>+4 Guest Speakers</span>
                            </div>
                        </div>


                        <div className='py-10 '>
                            <p className='font-semibold text-xl text-zinc-500 max-sm:text-sm'>Your Activities</p>

                            <div className='flex gap-8 items-center pt-6 max-sm:gap-3 max-sm:items-start'>
                                <FaRegDotCircle className='text-xl text-zinc-500 max-sm:text-base'/>
                                <div className=''>
                                    <p className='max-sm:text-xs'>You donated $500 to this event</p>
                                    <div className='flex gap-4 items-center pt-1'>
                                        <p className='text-sm text-zinc-500 max-sm:text-xs'>January - 20 - 2023</p>
                                        <p className='text-sm text-zinc-500 border-l border-zinc-400 pl-4 max-sm:text-xs'>5:00pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-8 items-center pt-6 max-sm:gap-3 max-sm:items-start'>
                                <FaRegDotCircle className='text-xl text-zinc-500 max-sm:text-base'/>
                                <div className=''>
                                    <p className='max-sm:text-xs'>You added this event to your schedule</p>
                                    <div className='flex gap-4 items-center pt-1'>
                                        <p className='text-sm text-zinc-500 max-sm:text-xs'>January - 14 - 2023</p>
                                        <p className='text-sm text-zinc-500 border-l border-zinc-400 pl-4 max-sm:text-xs'>10:00am</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
            </div>
        </div>

        <div className='bg-white h-220 w-270 rounded-3xl p-10 px-5 max-sm:w-full max-sm:mt-20 max-sm:h-full max-sm:p-5 max-sm:hidden'>
            {show === false ? (
                <div className='text-center'>
                    <img src={arrow} alt="" className='m-auto pt-20 pb-8' width={60} />
                    <p>Click on an event to see the full details here</p>
                </div>
            ):
            (

                <div className='h-200 overflow-y-scroll px-5 max-sm:p-0'>
                    <div>
                        <img src={main2} alt="" className='rounded-3xl'/>
                        <p className='text-xl text-blue-950 font-semibold pt-5'>Algorand Blockchain Education & Awareness Events.</p>
                    </div>

                    <div className='flex items-start pt-5 max-sm:block'>
                        <div className='flex gap-3 '>
                            <img src={prof} alt="" className='w-10 h-10'/>
                            <div>
                                <p className='text-sm'>algouser</p>
                                <p className='text-xs text-zinc-400'>Author</p>
                            </div>

                        </div>

                        <div className='flex items-center gap-3 ml-auto max-sm:block'>
                            <p className='text-xs text-zinc-400 flex items-start gap-2'><IoIosTimer /> Posted 5hrs ago</p>
                            <p className='text-xs text-zinc-400 flex items-start gap-2'><FaEye /> 20k Views</p>
                            <p className='text-xs text-zinc-400 flex items-start gap-2'><FaCalendarDays /> 5k Scheduled</p>
                        </div>
                    </div>

                    <div className='flex bg-zinc-100 p-5 rounded-2xl mt-5 items-start max-sm:block'>
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

                    <div>
                        <p className='text-sm pt-4 text-zinc-500'><b>Description</b>: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum a</p>

                        <div className='flex items-center pt-5 max-sm:block'>
                            <div className=' flex gap-3 items-center'>

                                <button className='bg-zinc-100 p-2 px-5 text-xs rounded-3xl text-blue-800'>
                                        Price: <span className='text-sm '>$Free</span>
                                </button>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer '>
                                    <FaShareAlt className='text-sm z-10 text-blue-800'/>
                                </div>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                    <FaMoneyBillWaveAlt className='text-sm z-10 text-blue-800'/>
                                </div>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                    <MdDelete className='text-sm z-10 text-blue-800'/>
                                </div>

                            </div>
                            
                            <div className="avatar-group -space-x-5 rtl:space-x-reverse items-center ml-auto">
                                    <div className="avatar">
                                        <div className="w-8">
                                        <img src={ava1} alt=''/>
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8">
                                        <img src={ava2} alt=''/>
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8">
                                        <img src={ava3} alt=''/>
                                        </div>
                                    </div>

                                    <div className="avatar">
                                        <div className="w-8">
                                        <img src={ava4} alt=''/>
                                        </div>
                                    </div>
                                    <span className='pl-8 text-zinc-500 text-xs'>+4 Guest Speakers</span>
                            </div>
                        </div>


                        <div className='py-10 '>
                            <p className='font-semibold text-xl text-zinc-500 max-sm:text-sm'>Your Activities</p>

                            <div className='flex gap-8 items-center pt-6 max-sm:gap-3 max-sm:items-start'>
                                <FaRegDotCircle className='text-xl text-zinc-500 max-sm:text-base'/>
                                <div className=''>
                                    <p className='max-sm:text-xs'>You donated $500 to this event</p>
                                    <div className='flex gap-4 items-center pt-1'>
                                        <p className='text-sm text-zinc-500 max-sm:text-xs'>January - 20 - 2023</p>
                                        <p className='text-sm text-zinc-500 border-l border-zinc-400 pl-4 max-sm:text-xs'>5:00pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-8 items-center pt-6 max-sm:gap-3 max-sm:items-start'>
                                <FaRegDotCircle className='text-xl text-zinc-500 max-sm:text-base'/>
                                <div className=''>
                                    <p className='max-sm:text-xs'>You added this event to your schedule</p>
                                    <div className='flex gap-4 items-center pt-1'>
                                        <p className='text-sm text-zinc-500 max-sm:text-xs'>January - 14 - 2023</p>
                                        <p className='text-sm text-zinc-500 border-l border-zinc-400 pl-4 max-sm:text-xs'>10:00am</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    </div>
  )
}

export default ScheduledEventBody