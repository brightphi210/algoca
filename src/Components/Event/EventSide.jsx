
import React from 'react'

import { FaTelegram } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const EventSide = () => {
  return (
    <div>
        <div className='fixed right-10 pt-36'>
                
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
        </div>
    </div>
  )
}

export default EventSide