import React from 'react'
import { useState } from 'react';

import prof from '../Images/pro.png'

import { IoMdNotifications } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";


import { FaShareAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { IoIosTimer } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { BsBrowserEdge } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";

import main2 from '../Images/main2.png'
import arrow from '../Images/arrow.png'


import ava1 from '../Images/Avatars.png'
import ava2 from '../Images/Avatars1.png'
import ava3 from '../Images/Avatars2.png'
import ava4 from '../Images/Avatars3.png'

const AccountBody = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => {
      setShow(true);
  }

  return (
    <div className='pt-36 pl-96 px-20 w-full h-full pb-20'>

      <div className='flex items-center gap-3 bg-white w-full p-10 rounded-3xl' >

        <div className='flex gap-3 items-center'>
          <img src={prof} alt="" />
          <div>
              <p className='text-3xl font-semibold'>algoname</p>
              <p className='text-sm text-zinc-500 pt-2'>user@email.com</p>
          </div>
        </div>

        <div className='ml-auto'>
          <button className='flex gap-3 items-center border-zinc-200 border p-3 rounded-full text-sm'><IoMdNotifications className='text-xl text-blue-800 '/> 
            Turn on notifications <input type="checkbox" className="toggle toggle-primary w-10 h-5 bg-violet-800 " />
          </button>
          <p className='text-xs text-zinc-500 pt-2'>Turn on notifications to see when this user <br />  posts an event</p>
        </div>

      </div>

      <div className='flex items-center gap-20 bg-white w-full p-10 rounded-3xl my-10'>

        <div className='w-fit'>
          <p className='flex gap-3 items-center text-xl'><GoDotFill className='text-xl text-violet-900'/> About</p>
          <p className='text-sm text-zinc-500 text-justify pt-5'>
            Algorand has set an event for fresh & upcoming devs to participate in the building of a 
            new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          </p>
        </div>

        <div className='ml-auto border-l border-zinc-200 pl-20 w-200'>
          <p className='flex gap-3 items-center text-xl'><GoDotFill className='text-xl text-violet-900'/> Socials</p>

          <div className='flex items-start gap-10 pt-5'>

            <div>
              <p className='text-sm text-zinc-500 pt-3 flex items-center gap-3'><FaFacebook /> Facebook acct</p>
              <p className='text-sm text-zinc-500 pt-3 flex items-center gap-3'><FaLinkedin /> LinkedIn acct</p>
              <p className='text-sm text-zinc-500 pt-3 flex items-center gap-3'><FaInstagram /> Instagram acct</p>
              <p className='text-sm text-zinc-500 pt-3 flex items-center gap-3'><FaSquareGithub /> Github acct</p>
            </div>

            <div>
              <p className='text-sm text-zinc-500 pt-3 flex items-center gap-3'><FaXTwitter /> Twitter acct</p>
              <p className='text-sm text-zinc-500 pt-3 flex items-center gap-3'><FaWhatsapp /> Whatsapp No.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full  items-start  gap-10'>

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

                    <div className=' cursor-pointer' onClick={handleShow}>
                        <img src={main2} alt="" className='rounded-3xl' width={500}/>
                    </div>

                    <div className=''>
                        <p className='text-lg text-blue-950 font-semibold'>Algorand Blockchain Education & Awareness Events.</p>
                        <div className='items-end'>

                            <div className='pt-4'>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500'><SlCalender /> 03:00pm</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500'><SlCalender /> Virtual Call Via Google Meet</p>
                                <p className='flex gap-3 items-center pt-5 text-xs text-zinc-500'><SlCalender /> 3 Days Event</p>
                                
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

                    <div className='col-span-1 cursor-pointer' onClick={handleShow}>
                        <img src={main2} alt="" className='rounded-3xl' width={500}/>
                    </div>

                    <div className='col-span-1'>
                        <p className='text-lg text-blue-950 font-semibold'>Algorand Blockchain Education & Awareness Events.</p>
                        <div className='items-end'>

                            <div className='pt-4'>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500'><SlCalender /> Jan - 20 - 2023</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500'><SlCalender /> 03:00pm</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500'><SlCalender /> Nigeria, Port Harcourt, GRA Rd</p>
                                <p className='flex gap-3 items-center pt-5  text-xs text-zinc-500'><SlCalender /> Virtual Call Via Google Meet</p>
                                <p className='flex gap-3 items-center pt-5 text-xs text-zinc-500'><SlCalender /> 3 Days Event</p>
                                
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
            {show === false ? (
                <div className='text-center'>
                    <img src={arrow} alt="" className='m-auto pt-20 pb-8' width={60} />
                    <p>Click on an event to see the full details here</p>
                </div>
            ):
            (

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

                    <div>
                        <p className='text-sm pt-4 text-zinc-500'><b>Description</b>: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum a</p>

                        <div className='flex items-center pt-5'>
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
                            <p className='font-semibold text-xl text-zinc-500'>Your Activities</p>

                            <div className='flex gap-8 items-center pt-6'>
                                <FaRegDotCircle className='text-xl text-zinc-500'/>
                                <div className=''>
                                    <p>You donated $500 to this event</p>
                                    <div className='flex gap-4 items-center pt-1'>
                                        <p className='text-sm text-zinc-500'>January - 20 - 2023</p>
                                        <p className='text-sm text-zinc-500 border-l border-zinc-400 pl-4'>5:00pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-8 items-center pt-6'>
                                <FaRegDotCircle className='text-xl text-zinc-500'/>
                                <div className=''>
                                    <p>You added this event to your schedule</p>
                                    <div className='flex gap-4 items-center pt-1'>
                                        <p className='text-sm text-zinc-500'>January - 14 - 2023</p>
                                        <p className='text-sm text-zinc-500 border-l border-zinc-400 pl-4'>10:00am</p>
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

    </div>
  )
}

export default AccountBody