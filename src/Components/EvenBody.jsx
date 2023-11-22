import React from 'react'
import mainImage from './Images/main.png'

import { FaTelegram } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const EvenBody = () => {
  return (
    <div>
        <div className='pt-36 grid grid-cols-3 gap-10 px-16 items-start'>
            <div className='col-span-2 relative'>
                <div>
                    <img src={mainImage} alt="" className='w-fit rounded-3xl' />
                    <div className='absolute bottom-24 left-14'>
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


                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>Algorand Blockchain Education & Awareness Events.</p>
                    </div>
                </div>
            </div>
 

            <div className='col-span-1 '>
                
                <div className='bg-white rounded-3xl p-7'>
                    <div className='flex gap-16 bg-zinc-100 p-4 px-8 rounded-2xl items-center'>
                        <p className='font-bold text-base'>Upcoming Events</p>
                        <p className='text-sm text-zinc-500'>Jan - 09 - 2023</p>
                    </div>

                    <div>
                        <ul className='flex gap-12 mt-5 text-zinc-300 m-auto justify-center'>
                            <li>S</li>
                            <li>M</li>
                            <li>T</li>
                            <li>W</li>
                            <li>T</li>
                            <li>F</li>
                            <li>S</li>
                        </ul>


                        <ul className='flex gap-12  mt-5 m-auto justify-center'>
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

                    <div className='bg-white h-96 overflow-y-scroll'>
                        <div className=' pt-8'>
                            <p className='text-zinc-300'>This Week</p>
                            <div className='flex gap-5 pt-7'>
                                <div className='border-r-4 border-blue-700 pr-4 w-24'>
                                    <p>10 Jan</p>
                                    <p className='text-xs text-zinc-400'>12:00pm</p>
                                    <p className='text-xs text-zinc-400'>Free</p>
                                </div>
                                <p className='text-sm'>Algorand Blockchain Education & Awareness Events.</p>
                            </div>

                            <div className='flex gap-5 pt-7'>
                                <div className='border-r-4 border-blue-700 pr-4 w-24'>
                                    <p>10 Jan</p>
                                    <p className='text-xs text-zinc-400'>12:00pm</p>
                                    <p className='text-xs text-zinc-400'>Free</p>
                                </div>
                                <p className='text-sm'>Algorand Blockchain Education & Awareness Events.</p>
                            </div>
                        </div>

                        <hr className='mt-5'/>


                        <div className=' pt-8'>
                            <p className='text-zinc-300'>This Month</p>
                            <div className='flex gap-5 pt-7'>
                                <div className='border-r-4 border-blue-700 pr-4 w-24'>
                                    <p>10 Jan</p>
                                    <p className='text-xs text-zinc-400'>12:00pm</p>
                                    <p className='text-xs text-zinc-400'>Free</p>
                                </div>
                                <p className='text-sm'>Algorand Blockchain Education & Awareness Events.</p>
                            </div>

                            <div className='flex gap-5 pt-7'>
                                <div className='border-r-4 border-blue-700 pr-4 w-24'>
                                    <p>10 Jan</p>
                                    <p className='text-xs text-zinc-400'>12:00pm</p>
                                    <p className='text-xs text-zinc-400'>Free</p>
                                </div>
                                <p className='text-sm'>Algorand Blockchain Education & Awareness Events.</p>
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
            </div>
        </div>
    </div>
  )
}

export default EvenBody
