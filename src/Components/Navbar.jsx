import React, {useState} from 'react'
import './modal.css'
import { Link } from 'react-router-dom';

import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";

import proImage from './Images/pro.png'
import flag from './Images/flag.png'


const Navbar = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);
    const [openSearch, setOpenSearch] = useState(false)

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


      const handleOpenSearch = () =>{
        setOpenSearch(true)
      }


      const closeSearch = () => {
        setOpenSearch(false);
      };
    


      const handleOverlayClick3 = (e) => {
        if (e.target === e.currentTarget) {
          closeSearch();
        }
      };



  return (
    <div className='flex px-16 py-5 bg-white items-center fixed w-screen shadow-sm z-20 max-sm:px-8'>
        <div className='flex gap-20 items-center'>
            <Link to={'/'}><h2>Algocal</h2></Link>
            <div className='flex items-center relative max-sm:hidden'>
                <input type="text" placeholder='Search for events here' className='bg-zinc-100 p-3 px-5 w-100 rounded-3xl outline-none text-sm'/>
                <FiSearch   className='absolute top-3 right-8 text-xl text-zinc-400'/>
            </div>
        </div>

        <div className='flex gap-8 items-center max-sm:gap-4 ml-auto'>
            <div className='flex gap-3 bg-zinc-100 p-3 px-6 rounded-3xl max-sm:hidden '>
                <img src={flag} alt="" className='w-6 h-6 max-sm:w-full ' />
                <p className='text-sm max-sm:hidden'>Nigeria</p>
            </div>

            
            <div onClick={handleOpenSearch}>
                <FiSearch className='hidden max-sm:text-2xl max-sm:block'/>
            </div>

            {openSearch && (

                <div className="fixed top-0 right-0 w-full h-full flex items-center justify-center " onClick={handleOverlayClick3}>
                    <div className='bg-white absolute top-0 w-full p-3 px-5 flex  gap-2'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <button className='bg-zinc-100 px-4 rounded-lg'><IoIosSend className='text-violet-900 text-2xl'/></button>
                    </div>
                </div>
            )}
        


            <img src={flag} alt="" className='hidden w-6 h-6 max-sm:w-full max-sm:block' />

            <div className='flex gap-2 items-center bg-zinc-100 p-3 px-6 rounded-3xl cursor-pointer max-sm:px-2 max-sm:p-2' onClick={openModal1}>
                <IoMdNotificationsOutline  className='text-xl max-sm:base'/>
                <p className='text-sm max-sm:hidden'>Notifications</p>
            </div>

            <div className='flex items-center gap-5 border-l-2 pl-3 cursor-pointer max-sm:hidden' onClick={openModal}>
                <img src={proImage} alt="" className='w-8 h-8'/>
                <p className='flex items-center text-sm max-sm:hidden'>algoname <FaCaretDown /></p>
            </div>
            <img src={proImage} alt="" className='hidden w-7 h-7 max-sm:block' onClick={openModal}/>

            <div className='pl-10'>
                <HiMenuAlt2 className='hidden max-sm:text-2xl max-sm:block'/>
            </div>
        </div> 


        {/* ==================== Profile Part =============================== */}
        {modalOpen && (
        <div
          className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 "
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-3 py-10 absolute right-10 top-28 w-fit max-sm:w-full max-sm:right-0 
            max-sm:relative max-sm:top-0 max-sm:mx-5 rounded-3xl transition-transform transform">
            <img src={proImage} alt=""  className='w-32 m-auto max-sm:w-16'/>
            <p className='text-center text-lg font-semibold max-sm:text-sm'>algoname</p>

            <div className='p-5 px-10 pl-4 mt-10  border border-zinc-100 rounded-2xl'>
                <p className='text-xs text-zinc-400'>Synced gmail account:</p>
                <p className='text-sm py-2'>www.username@gmail.com</p>
                <div className='border border-zinc-200 w-fit p-2 px-5 rounded-3xl cursor-pointer'>
                    <p className='flex items-center gap-2 text-sm'><FiEdit /> Edit</p>
                </div>

                <div className="flex flex-col pt-5">
                    <div className="form-control ">
                        <label className="cursor-pointer label gap-4">
                        <span className="label-text text-sm max-sm:text-xs">Push notifications to email</span> 
                        <input type="checkbox" className="toggle toggle-primary bg-zinc-300 border border-zinc-300 text-xs"  />
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
          <div className="bg-white p-5 py-10 absolute right-10 top-28 w-fit rounded-3xl transition-transform 
            transform h-fit max-sm:right-5 max-sm:w-96 max-sm:top-20 ">
            <p className='text-center text-2xl font-semibold flex'><GoDotFill className='text-blue-600'/> Notifications</p>

            <div className='h-200 overflow-y-scroll max-sm:h-170'>
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