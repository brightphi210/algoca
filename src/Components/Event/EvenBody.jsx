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

import { FaTelegram } from "react-icons/fa6";
// import { GoDotFill } from "react-icons/go";

import mainImage from '../Images/main.png'
import main2 from '../Images/main2.png'

import prof from '../Images/pro.png'
import ava1 from '../Images/Avatars.png'
import ava2 from '../Images/Avatars1.png'
import ava3 from '../Images/Avatars2.png'
import ava4 from '../Images/Avatars3.png'

const EvenBody = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
      };

      const handleToggle2 = () => {
        setIsOpen2(!isOpen2);
      };
  return (
    <div>
        <div className='pt-36 flex pl-96 px-20 gap-10 max-sm:block max-sm:px-6 py-10 max-sm:w-full max-sm:pt-28'>
            <div className='px-5 max-sm:p-0 '>
                <div className='relative'>
                    <div className='w-fit h-fit max-'>
                        <img src={mainImage} alt="" className='rounded-3xl max-sm:w-full max-sm:h-48' />
                    </div>
                    <div className='absolute bottom-14 left-14 max-sm:left-5 max-sm:bottom-5'>
                        <p className=' text-3xl font-bold text-white max-sm:text-base'>Algorand Blockchain Education & <br /> Awareness Events.</p>
                        <div className='flex gap-4 pt-5'>
                            <p className='flex gap-3 bg-zinc-600 p-3 px-4 max-sm:p-2 max-sm:px-3 text-white items-center text-center rounded-3xl max-sm:text-xs'><IoIosStar className='text-lg max-sm:text-sm'/> Sponsored</p>
                            <p className='bg-zinc-600 p-3 px-4 max-sm:p-2 max-sm:px-2 text-white items-center text-center rounded-3xl'><FaShareAlt className='text-lg max-sm:text-sm'/></p>
                            <p className='bg-zinc-600 p-3 px-4 max-sm:p-2 max-sm:px-3 text-white items-center text-center rounded-3xl '><FaLink className='text-lg max-sm:text-sm'/></p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 items-center pt-5 justify-center max-sm:block'>
                    <p className='col-span-1 flex gap-3 items-center text-lg max-sm:gap-2 max-sm:text-sm'><GoDotFill className='text-xl max-sm:text-sm text-blue-800'/> Events</p>
                    <div className='flex gap-5 items-center w-full justify-center max-sm:gap-2 max-sm:justify-start max-sm:pt-2'>
                        <p className='bg-white p-3 px-8 rounded-3xl text-sm max-sm:text-xs max-sm:px-4 max-sm:rounded-lg'>All</p>
                        <p className='bg-white p-3 px-8 rounded-3xl text-sm max-sm:text-xs max-sm:px-4 max-sm:rounded-lg'>Recents</p>
                        <p className='bg-white p-3 px-8 rounded-3xl text-sm max-sm:text-xs max-sm:px-4 max-sm:rounded-lg'>Most Important</p>
                    </div>
                </div>



                {/* ========================== This is First Event Div Card ===================================== */}
                <div className=' my-10 bg-white p-5 rounded-3xl max-sm:w-full max-sm:px-3 max-sm:p-0 border-zinc-100 shadow-md'>

                    <div className="collapse-title text-xl font-medium flex gap-8 max-sm:block max-sm:w-full max-sm:px-3 max-sm:py-5">

                        <div className=' cursor-pointer ' onClick={handleToggle}>
                            <img src={main2} alt="" className='rounded-3xl w-200 '/>
                        </div>

                        <div className=''>
                            <p className='text-2xl text-blue-950 font-semibold max-sm:text-base max-sm:pt-5'>Algorand Blockchain Education & Awareness Events.</p>
                            <div className='grid grid-cols-3 gap-3 items-end max-sm:block'>

                                <div className='pt-5 col-span-2 max-sm:pt-2'>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500 max-sm:text-xs max-sm:pt-3'><SlCalender /> Jan - 20 - 2023</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500 max-sm:text-xs max-sm:pt-3'><SlCalender /> 03:00pm</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500 max-sm:text-xs max-sm:pt-3'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500 max-sm:text-xs max-sm:pt-3'><SlCalender /> Virtual Call Via Google Meet</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500 max-sm:text-xs max-sm:pt-3'><SlCalender /> 3 Days Event</p>
                                    
                                </div>
                                <div className='col-span-1'>
                                    <button className='bg-zinc-100 p-2 px-6 text-xs rounded-3xl text-blue-800 max-sm:mt-3'>
                                        Price: <span className='text-base max-sm:text-sm'>$Free</span>
                                    </button>
                                </div>
                            </div>
                            <div className=' grid grid-cols-4 pt-10 items-center max-sm:flex max-sm:gap-3 max-sm:pt-4'>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer '>
                                    <FaShareAlt className='text-base z-10 text-blue-800 max-sm:text-sm'/>
                                    <button className=' text-sm hidden group-hover:block text-blue-800 max-sm:group-hover:hidden'>share</button>
                                </div>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                    <FaMoneyBillWaveAlt className='text-base z-10 text-blue-800 max-sm:text-sm'/>
                                    <button className=' text-sm hidden group-hover:block text-blue-800 max-sm:group-hover:hidden'>Donate</button>
                                </div>

                                <button className='text-sm col-span-2 bg-blue-800 p-3 px-5 text-white rounded-3xl max-sm:text-xs'>Add to Scheduled</button>
                            </div>
                        </div>
                    </div>


                    {isOpen && (
                        <div className="px-2">
                            <hr className='my-5'/>
                        
                            <div className='grid grid-cols-2 gap-52 items-center max-sm:block'>
                                <div className='flex gap-3 col-span-1'>
                                    <img src={prof} alt="" className='w-10 h-10'/>
                                    <div>
                                        <p className='text-sm'>algouser</p>
                                        <p className='text-xs text-zinc-400'>Author</p>
                                    </div>

                                </div>

                                <div className='flex items-center gap-8 col-span-1 max-sm:block max-sm:pt-4'>
                                    <p className='text-xs text-zinc-400 flex items-start gap-2 max-sm:pt-2'><IoIosTimer /> Posted 5hrs ago</p>
                                    <p className='text-xs text-zinc-400 flex items-start gap-2 max-sm:pt-2'><FaEye /> 20k Views</p>
                                    <p className='text-xs text-zinc-400 flex items-start gap-2 max-sm:pt-2'><FaCalendarDays /> 5k Scheduled</p>
                                </div>
                            </div>

                            <div className='pt-5'>
                                <p className='text-sm text-justify text-zinc-500 max-sm:text-xs'>
                                    <b className='text-zinc-800'>Description: </b> 
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut lao ute
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet doilore ianibh magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam corper suscipit lobortis nisl dia.
                                </p>

                                <p className='text-sm pt-5'>Website Link: <span className='text-blue-600 max-sm:text-xs'>http//:kbhd+siaeyt3794tiguaf028yr8hufgw64</span></p>

                            </div>

                            <div className="avatar-group -space-x-4 max-sm:-space-x-3 rtl:space-x-reverse items-center py-5 ">
                                <div className="avatar">
                                    <div className="w-10 max-sm:w-6">
                                    <img src={ava1} alt=''/>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-10 max-sm:w-6">
                                    <img src={ava2} alt=''/>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-10 max-sm:w-6">
                                    <img src={ava3} alt=''/>
                                    </div>
                                </div>

                                <div className="avatar">
                                    <div className="w-10 max-sm:w-6">
                                    <img src={ava4} alt=''/>
                                    </div>
                                </div>
                                <span className='pl-8 text-zinc-500 max-sm:text-xs'>+4 Guest Speakers</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* ========================== This is Second Event Div Card ===================================== */}



            </div>

            <div className='ml-auto'>
                
                <div className='bg-white rounded-3xl p-7 w-90 max-sm:w-fit max-sm:px-4 max-sm:rounded-xl'>
                    <div className='flex gap-10 bg-zinc-100 p-4 px-8 rounded-2xl items-center max-sm:gap-4'>
                        <p className='font-bold text-base max-sm:text-xs'>Upcoming Events</p>
                        <p className='text-sm text-zinc-500 max-sm:text-xs max-sm:ml-auto'>Jan - 09 - 2023</p>
                    </div>
    
                    <div>
                        <ul className='flex gap-9 mt-5 text-zinc-300 justify-center'>
                            <li className='max-sm:text-xs'>S</li>
                            <li className='max-sm:text-xs'>M</li>
                            <li className='max-sm:text-xs'>T</li>
                            <li className='max-sm:text-xs'>W</li>
                            <li className='max-sm:text-xs'>T</li>
                            <li className='max-sm:text-xs'>F</li>
                            <li className='max-sm:text-xs'>S</li>
                        </ul>
    
    
                        <ul className='flex gap-8  mt-5 justify-center max-sm:text-xs'>
                            <li className='max-sm:text-xs'>8</li>
                            <li className='text-red-300'>9</li>
                            <li className='max-sm:text-xs'>10</li>
                            <li className='max-sm:text-xs'>11</li>
                            <li className='max-sm:text-xs'>12</li>
                            <li className='max-sm:text-xs'>13</li>
                            <li className='max-sm:text-xs'>14</li>
                        </ul>
                    </div>
    
                    <hr className='mt-5'/>
    
                    <div className=' bg-white h-96 overflow-y-scroll'>
                        <div className='pt-8'>
                            <p className='text-zinc-300 max-sm:text-sm'>This Week</p>

                            <div className='flex gap-5 pt-7 w-fit'>
                                <div className=' border-r-4 border-blue-700 pr-4 w-fit max-sm:border-r-2'>
                                    <p className='max-sm:text-xs'>10 Jan</p>
                                    <p className='text-sm text-zinc-400 max-sm:text-xs'>12:00pm</p>
                                    <p className='text-sm text-zinc-400 max-sm:text-xs'>Free</p>
                                </div>
                                <p className='text-sm max-sm:text-xs'>Algorand Blockchain Education & Awareness Events.</p>
                            </div>
    
                            <div className='flex gap-5 pt-7 w-fit'>
                                <div className=' border-r-4 border-blue-700 pr-4 w-fit max-sm:border-r-2'>
                                    <p className='max-sm:text-xs'>10 Jan</p>
                                    <p className='text-sm text-zinc-400 max-sm:text-xs'>12:00pm</p>
                                    <p className='text-sm text-zinc-400 max-sm:text-xs'>Free</p>
                                </div>
                                <p className='text-sm max-sm:text-xs'>Algorand Blockchain Education & Awareness Events.</p>
                            </div>
                        </div>
    
                        <hr className='mt-5'/>
                        <div className='pt-8 max-sm:pt-5'>
                            <p className='text-zinc-300 max-sm:text-sm'>This Month</p>

                            <div className='flex gap-5 pt-7 w-fit'>
                                <div className=' border-r-4 border-blue-700 pr-4 w-fit max-sm:border-r-2'>
                                    <p className='max-sm:text-xs'>10 Jan</p>
                                    <p className='text-sm text-zinc-400 max-sm:text-xs'>12:00pm</p>
                                    <p className='text-sm text-zinc-400 max-sm:text-xs'>Free</p>
                                </div>
                                <p className='text-sm max-sm:text-xs'>Algorand Blockchain Education & Awareness Events.</p>
                            </div>
    
                             <div className='flex gap-5 pt-7 w-fit'>
                                <div className=' border-r-4 border-blue-700 pr-4 w-fit max-sm:border-r-2'>
                                    <p className='max-sm:text-xs'>10 Jan</p>
                                    <p className='text-sm text-zinc-400 max-sm:text-xs'>12:00pm</p>
                                    <p className='text-sm text-zinc-400 max-sm:text-xs'>Free</p>
                                </div>
                                <p className='text-sm max-sm:text-xs'>Algorand Blockchain Education & Awareness Events.</p>
                            </div>
                        </div>                    
                        
    
    
                    </div>
                    
                </div>
    
                <p className='pt-5 text-lg flex gap-3 max-sm:text-sm'> 
                    <GoDotFill className='text-xl text-blue-800 items-center max-sm:text-base'/> Algo Community
                </p>
                <div className='mt-3 bg-white rounded-3xl p-5 max-sm:rounded-xl' >
                    <div className='flex gap-4 bg-white items-center cursor-pointer'>
                        <div>
                            <FaTelegram className='text-5xl text-blue-800 max-sm:text-2xl'/>
                        </div>
                        <div>
                            <p className='text-xs'>Telegram</p>
                            <p className='max-sm:text-sm'>Join Our Telegram Community</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EvenBody



