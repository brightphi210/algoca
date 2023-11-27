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
        <div className='pt-36 flex pl-96 px-20 gap-10 max-sm:block max-sm:px-5 py-10 max-sm:w-full max-sm:pt-28'>
            <div className='px-5 max-sm:p-0 '>
                <div className='relative'>
                    <div className='w-fit h-fit max-'>
                        <img src={mainImage} alt="" className='rounded-3xl max-sm:w-full max-sm:h-56' />
                    </div>
                    <div className='absolute bottom-14 left-14'>
                        <p className=' text-3xl font-bold text-white max-sm:text-base'>Algorand Blockchain Education & <br /> Awareness Events.</p>
                        <div className='flex gap-4 pt-5'>
                            <p className='flex gap-3 bg-zinc-600 p-3 px-4 text-white items-center text-center rounded-3xl'><IoIosStar className='text-lg'/> Sponsored</p>
                            <p className='bg-zinc-600 p-3 px-4 text-white items-center text-center rounded-3xl'><FaShareAlt className='text-lg'/></p>
                            <p className='bg-zinc-600 p-3 px-4 text-white items-center text-center rounded-3xl'><FaLink className='text-lg'/></p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 items-center pt-5 justify-center max-sm:block'>
                    <p className='col-span-1 flex gap-3 items-center text-lg'><GoDotFill className='text-xl text-blue-800'/> Events</p>
                    <div className='flex gap-5 items-center w-full justify-center'>
                        <p className='bg-white p-3 px-8 rounded-3xl text-sm max-sm:text-xs'>All</p>
                        <p className='bg-white p-3 px-8 rounded-3xl text-sm max-sm:text-xs'>Recents</p>
                        <p className='bg-white p-3 px-8 rounded-3xl text-sm max-sm:text-xs'>Most Important</p>
                    </div>
                </div>



                {/* ========================== This is First Event Div Card ===================================== */}
                <div className=' my-10 bg-white p-5 rounded-3xl max-sm:w-full'>

                    <div className="collapse-title text-xl font-medium grid grid-cols-2 gap-8 max-sm:block max-sm:w-full">

                        <div className='col-span-1 cursor-pointer' onClick={handleToggle}>
                            <img src={main2} alt="" className='rounded-3xl'/>
                        </div>

                        <div className='col-span-1'>
                            <p className='text-2xl text-blue-950 font-semibold'>Algorand Blockchain Education & Awareness Events.</p>
                            <div className='grid grid-cols-3 gap-3 items-end max-sm:block'>

                                <div className='pt-5 col-span-2'>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500'><SlCalender /> 03:00pm</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500'><SlCalender /> Virtual Call Via Google Meet</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500'><SlCalender /> 3 Days Event</p>
                                    
                                </div>
                                <div className='col-span-1'>
                                    <button className='bg-zinc-100 p-2 px-6 text-xs rounded-3xl text-blue-800'>
                                        Price: <span className='text-base '>$Free</span>
                                    </button>
                                </div>
                            </div>
                            <div className=' grid grid-cols-4 pt-10 items-center'>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer '>
                                    <FaShareAlt className='text-base z-10 text-blue-800'/>
                                    <button className=' text-sm hidden group-hover:block text-blue-800'>share</button>
                                </div>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                    <FaMoneyBillWaveAlt className='text-base z-10 text-blue-800'/>
                                    <button className=' text-sm hidden group-hover:block text-blue-800'>Donate</button>
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

                {/* ========================== This is First Event Div Card ===================================== */}
                {/* <div className=' my-10 bg-white p-5 rounded-3xl'>

                    <div className="collapse-title text-xl font-medium grid grid-cols-2 gap-8">

                        <div className='col-span-1 cursor-pointer' onClick={handleToggle2}>
                            <img src={main2} alt="" className='rounded-3xl'/>
                        </div>

                        <div className='col-span-1'>
                            <p className='text-2xl text-blue-950 font-semibold'>Algorand Blockchain Education & Awareness Events.</p>
                            <div className='grid grid-cols-3 gap-3 items-end'>

                                <div className='pt-5 col-span-2'>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500'><SlCalender /> 03:00pm</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500'><SlCalender /> Virtual Call Via Google Meet</p>
                                    <p className='flex gap-3 items-center pt-6 text-sm text-zinc-500'><SlCalender /> 3 Days Event</p>
                                    
                                </div>
                                <div className='col-span-1'>
                                    <button className='bg-zinc-100 p-2 px-6 text-xs rounded-3xl text-blue-800'>
                                        Price: <span className='text-base '>$Free</span>
                                    </button>
                                </div>
                            </div>
                            <div className=' grid grid-cols-4 pt-10 items-center'>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer '>
                                    <FaShareAlt className='text-base z-10 text-blue-800'/>
                                    <button className=' text-sm hidden group-hover:block text-blue-800'>share</button>
                                </div>

                                <div className='group flex gap-3 items-center p-3 px-3 bg-zinc-100 rounded-full col-span-1 w-fit cursor-pointer'>
                                    <FaMoneyBillWaveAlt className='text-base z-10 text-blue-800'/>
                                    <button className=' text-sm hidden group-hover:block text-blue-800'>Donate</button>
                                </div>

                                <button className='text-sm col-span-2 bg-blue-800 p-3 px-5 text-white rounded-3xl'>Add to Scheduled</button>
                            </div>
                        </div>
                    </div>


                    {isOpen2 && (
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
                </div> */}


            </div>

            {/* <div className='ml-auto'>
                
                <div className='bg-white rounded-3xl p-7 w-90'>
                    <div className='flex gap-10 bg-zinc-100 p-4 px-8 rounded-2xl items-center'>
                        <p className='font-bold text-base'>Upcoming Events</p>
                        <p className='text-sm text-zinc-500'>Jan - 09 - 2023</p>
                    </div>
    
                    <div>
                        <ul className='flex gap-9 mt-5 text-zinc-300 justify-center'>
                            <li>S</li>
                            <li>M</li>
                            <li>T</li>
                            <li>W</li>
                            <li>T</li>
                            <li>F</li>
                            <li>S</li>
                        </ul>
    
    
                        <ul className='flex gap-8  mt-5 justify-center'>
                            <li>8</li>
                            <li className='text-red-300'>9</li>
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                            <li>13</li>
                            <li>14</li>
                        </ul>
                    </div>
    
                    <hr className='mt-5'/>
    
                    <div className=' bg-white h-96 overflow-y-scroll'>
                        <div className='pt-8'>
                            <p className='text-zinc-300'>This Week</p>
                            <div className='flex gap-5 pt-7 w-fit'>
                                <div className=' border-r-4 border-blue-700 pr-4 w-fit'>
                                    <p>10 Jan</p>
                                    <p className='text-sm text-zinc-400'>12:00pm</p>
                                    <p className='text-sm text-zinc-400'>Free</p>
                                </div>
                                <p className='text-sm '>Algorand Blockchain Education & Awareness Events.</p>
                            </div>
    
                            <div className='flex gap-5 pt-7 w-fit'>
                                <div className=' border-r-4 border-blue-700 pr-4 w-fit'>
                                    <p>10 Jan</p>
                                    <p className='text-sm text-zinc-400'>12:00pm</p>
                                    <p className='text-sm text-zinc-400'>Free</p>
                                </div>
                                <p className='text-sm '>Algorand Blockchain Education & Awareness Events.</p>
                            </div>
                        </div>
    
                        <hr className='mt-5'/>
                        <div className='pt-8'>
                            <p className='text-zinc-300'>This Month</p>
                            <div className='flex gap-5 pt-7 w-fit'>
                                <div className=' border-r-4 border-blue-700 pr-4 w-fit'>
                                    <p>10 Jan</p>
                                    <p className='text-sm text-zinc-400'>12:00pm</p>
                                    <p className='text-sm text-zinc-400'>Free</p>
                                </div>
                                <p className='text-sm '>Algorand Blockchain Education & Awareness Events.</p>
                            </div>
    
                            <div className='flex gap-5 pt-7 w-fit'>
                                <div className=' border-r-4 border-blue-700 pr-4 w-fit'>
                                    <p>10 Jan</p>
                                    <p className='text-sm text-zinc-400'>12:00pm</p>
                                    <p className='text-sm text-zinc-400'>Free</p>
                                </div>
                                <p className='text-sm '>Algorand Blockchain Education & Awareness Events.</p>
                            </div>
                        </div>                    
                        
    
    
                    </div>
                    
                </div>
    
                <p className='pt-5 text-lg flex gap-3'> <GoDotFill className='text-xl text-blue-800 items-center'/> Algo Community</p>
                <div className='mt-3 bg-white rounded-3xl p-5'>
                    <div className='flex gap-4 bg-white items-center cursor-pointer'>
                        <div>
                            <FaTelegram className='text-5xl text-blue-800'/>
                        </div>
                        <div>
                            <p className='text-xs'>Telegram</p>
                            <p>Join Our Telegram Community</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default EvenBody



