import React, {useState} from 'react'
import './modal.css'

import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

import proImage from './Images/pro.png'
import flag from './Images/flag.png'


const Navbar = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };


    const openModal1 = () => {
        setModalOpen1(true);
      };
    
      const closeModal1 = () => {
        setModalOpen1(false);
      };
    
      const handleOverlayClick1 = (e) => {
        if (e.target === e.currentTarget) {
          closeModal1();
        }
      };


  return (
    <div className='grid grid-cols-3 px-16 py-5 bg-white items-center fixed w-screen shadow-sm z-20'>
        <div className='col-span-2 flex gap-20 items-center'>
            <h2>Algocal</h2>
            <div className='flex items-center relative'>
                <input type="text" placeholder='Search for events here' className='bg-zinc-100 p-3 px-5 w-100 rounded-3xl outline-none text-sm'/>
                <FiSearch   className='absolute top-3 right-8 text-xl text-zinc-400'/>
            </div>
        </div>

        <div className='col-span-1 flex gap-10 items-center'>
            <div className='flex gap-3 bg-zinc-100 p-3 px-6 rounded-3xl'>
                <img src={flag} alt="" className='w-6 h-6'/>
                <p className='text-sm'>Nigeria</p>
            </div>

            <div className='flex gap-2 items-center bg-zinc-100 p-3 px-6 rounded-3xl cursor-pointer' onClick={openModal1}>
                <IoMdNotificationsOutline  className='text-xl'/>
                <p className='text-sm'>Notifications</p>
            </div>

            <div className='flex items-center gap-5 border-l-2 pl-3 cursor-pointer' onClick={openModal}>
                <img src={proImage} alt="" className='w-8 h-8'/>
                <p className='flex items-center text-sm'>algoname <FaCaretDown /></p>
            </div>
        </div> 


        {/* ==================== Profile Part =============================== */}
        {modalOpen && (
        <div
          className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-3 py-10 absolute right-10 top-28 w-fit rounded-3xl transition-transform transform">
            <img src={proImage} alt=""  className='w-32 m-auto'/>
            <p className='text-center text-lg font-semibold'>algoname</p>

            <div className='p-5 px-10 pl-4 mt-10  border border-zinc-100 rounded-2xl'>
                <p className='text-xs text-zinc-400'>Synced gmail account:</p>
                <p className='text-sm py-2'>www.username@gmail.com</p>
                <div className='border border-zinc-200 w-fit p-2 px-5 rounded-3xl cursor-pointer'>
                    <p className='flex items-center gap-2 text-sm'><FiEdit /> Edit</p>
                </div>

                <div className="flex flex-col pt-5">
                    <div className="form-control ">
                        <label className="cursor-pointer label gap-4">
                        <span className="label-text text-sm">Push notifications to email</span> 
                        <input type="checkbox" className="toggle toggle-primary bg-zinc-300 border border-zinc-300 text-sm"  />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="cursor-pointer label gap-4">
                        <span className="label-text text-sm">Sync with google calendar</span> 
                        <input type="checkbox" className="toggle toggle-primary bg-zinc-300 border border-zinc-300 text-sm"  />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="cursor-pointer label gap-4">
                        <span className="label-text text-sm">Display email to public</span> 
                        <input type="checkbox" className="toggle toggle-primary bg-zinc-300 border border-zinc-300 text-sm"  />
                        </label>
                    </div>
                </div>
            </div>
          </div>
        </div>
        )}

        {/* ========================= Notification Part ============================= */}
        {modalOpen1 && (
        <div
          className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={handleOverlayClick1}
        >
          <div className="bg-white p-5 py-10 absolute right-10 top-28 w-fit rounded-3xl transition-transform transform h-fit ">
            <p className='text-center text-2xl font-semibold flex'><GoDotFill className='text-blue-600'/> Notifications</p>

            <div className='h-200 overflow-y-scroll '>
                <div className='p-5 px-10 pl-4 mt-4'>
                    <p className='text-xs text-zinc-400'>This Week</p>
                    <div>
                        <div className='pt-5 flex gap-3 items-start pb-5'>
                            <GoDot className='text-blue-700 text-lg'/>
                            <div>
                                <p className=' text-sm text-zinc-600 '> Donation  algoname has donated $50 to the algo</p>
                                <p className='text-xs text-zinc-500 pt-2'>01 jan 2023</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <div className='pt-5 flex gap-3 items-start pb-5'>
                            <GoDot className='text-blue-700 text-lg'/>
                            <div>
                                <p className=' text-sm text-zinc-600 '> Donation  algoname has donated $50 to the algo </p>
                                <p className='text-xs text-zinc-500 pt-2'>01 jan 2023</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <div className='pt-5 flex gap-3 items-start pb-5'>
                            <GoDot className='text-blue-700 text-lg'/>
                            <div>
                                <p className=' text-sm text-zinc-600 '> Donation  algoname has donated $50 to the algo </p>
                                <p className='text-xs text-zinc-500 pt-2'>01 jan 2023</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                </div>

                <div className='p-5 px-10 pl-4 mt-4'>
                    <p className='text-xs text-zinc-400'>Last Week</p>
                    <div>
                        <div className='pt-5 flex gap-3 items-start pb-5'>
                            <GoDot className='text-blue-700 text-lg'/>
                            <div>
                                <p className=' text-sm text-zinc-600 '> Donation  algoname has donated $50 to the algo </p>
                                <p className='text-xs text-zinc-500 pt-2'>01 jan 2023</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <div className='pt-5 flex gap-3 items-start pb-5'>
                            <GoDot className='text-blue-700 text-lg'/>
                            <div>
                                <p className=' text-sm text-zinc-600 '> Donation  algoname has donated $50 to the algo </p>
                                <p className='text-xs text-zinc-500 pt-2'>01 jan 2023</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <div className='pt-5 flex gap-3 items-start pb-5'>
                            <GoDot className='text-blue-700 text-lg'/>
                            <div>
                                <p className=' text-sm text-zinc-600 '> Donation  algoname has donated $50 to the algo </p>
                                <p className='text-xs text-zinc-500 pt-2'>01 jan 2023</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                </div>

                <div className='p-5 px-10 pl-4 mt-4'>
                    <p className='text-xs text-zinc-400'>Last Month</p>
                    <div>
                        <div className='pt-5 flex gap-3 items-start pb-5'>
                            <GoDot className='text-blue-700 text-lg'/>
                            <div>
                                <p className=' text-sm text-zinc-600 '> Donation  algoname has donated $50 to the algo </p>
                                <p className='text-xs text-zinc-500 pt-2'>01 jan 2023</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <div className='pt-5 flex gap-3 items-start pb-5'>
                            <GoDot className='text-blue-700 text-lg'/>
                            <div>
                                <p className=' text-sm text-zinc-600 '> Donation  algoname has donated $50 to the algo </p>
                                <p className='text-xs text-zinc-500 pt-2'>01 jan 2023</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <div className='pt-5 flex gap-3 items-start pb-5'>
                            <GoDot className='text-blue-700 text-lg'/>
                            <div>
                                <p className=' text-sm text-zinc-600 '> Donation  algoname has donated $50 to the algo </p>
                                <p className='text-xs text-zinc-500 pt-2'>01 jan 2023</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                </div>

                <p className='text-center text-zinc-400 text-lg pt-5'>No more notifications</p>
            </div>

          </div>
        </div>
        )}
    </div>
  )
}

export default Navbar