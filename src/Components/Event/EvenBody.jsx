import React from 'react'

// import { FaTelegram } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

import mainImage from '../Images/main.png'
import main2 from '../Images/main2.png'

const EvenBody = () => {
  return (
    <div>
        <div className='pt-36 grid grid-cols-4 pl-96 px-40'>
            <div className='col-span-3 relative'>
                <div>
                    <div className='w-fit h-fit '>
                        <img src={mainImage} alt="" className='rounded-3xl' />
                    </div>
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


                <div className='grid grid-cols-2'>
                    <div className='col-span-1'>
                        <img src={main2} alt="" />
                    </div>
                    <div className='col-span-1'>
                        <p>Algorand Blockchain Education & Awareness Events.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EvenBody
