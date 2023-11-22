import React from 'react'

// import { FaTelegram } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

import mainImage from '../Images/main.png'
import main2 from '../Images/main2.png'

const EvenBody = () => {
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




                <div className=' mt-10 bg-white p-5 rounded-3xl'>

                    <div className="collapse">
                        <input type="checkbox" /> 
                        
                        <div className="collapse-title text-xl font-medium grid grid-cols-2 gap-8">

                            <div className='col-span-1'>
                                <img src={main2} alt="" className='rounded-3xl'/>
                            </div>

                            <div className='col-span-1'>
                                <p className='text-2xl text-blue-950 font-semibold'>Algorand Blockchain Education & Awareness Events.</p>
                                <div className='grid grid-cols-3 gap-3 items-end'>
                                    <div className='pt-5 col-span-2'>
                                        <p className='flex gap-3 items-center pt-4 text-sm text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                        <p className='flex gap-3 items-center pt-4 text-sm text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                        <p className='flex gap-3 items-center pt-4 text-sm text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                        <p className='flex gap-3 items-center pt-4 text-sm text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                    </div>
                                    <div className='col-span-1'>
                                        <button className='bg-zinc-100 p-2 px-6 text-xs rounded-3xl text-blue-800'>
                                            Price: <span className='text-base '>$Free</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='grid grid-cols-4 gap-10 pt-6 items-center'>
                                    {/* <p><FaShareAlt className='col-span-1'/></p> */}

                                    <div className='bg-zinc-100 flex items-center col-span-1 text-sm p-3 px-5' >
                                        <FaShareAlt className='text-2xl'/>
                                        <p>share</p>
                                    </div>

                                    <div className='bg-zinc-100 flex items-center col-span-1  px-5' >
                                        <FaMoneyBillWaveAlt className='text-2xl'/>
                                        <p className='text-sm '>Donate</p>
                                    </div>
                                    <button className='text-sm col-span-2 bg-blue-800 p-3 px-5 text-white rounded-3xl'>Add to Scheduled</button>
                                </div>
                            </div>
                        </div>



                        <div className="collapse-content"> 
                            <p>hello</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default EvenBody


// 03:00pm
// Nigeria, Port Harcourt, GRA Rd
// Virtual Call Via Google Meet
// 3 Days Event
