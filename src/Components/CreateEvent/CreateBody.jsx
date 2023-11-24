import React from 'react'

import { GoDotFill } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";

import proImage from '../Images/pro.png'
import add from '../Images/add.png'

const CreateBody = () => {
  return (
    <div>
        <div className='pt-36 pl-96 px-20'>
          <div className='bg-white w-fit p-10 rounded-3xl h-220'>

            <div className=' h-200 px-5 overflow-y-scroll'>
              <p className='text-xl flex gap-2 font-semibold'> <GoDotFill className='text-2xl text-blue-800 items-center'/> Create Event</p>
              <p className='pt-14 font-semibold'> Event Details</p>

              <div className='py-6'>
                <div className='grid grid-cols-3 items-center gap-5'>

                  <div className='col-span-2'>
                    <label className='text-sm text-zinc-500 pb-5'>Event title:</label>
                    <input type="text" className='border border-zinc-200 p-4 w-full mt-3 outline-none rounded-xl'/>
                  </div>

                  <div className='col-span-1'>
                    <label className='text-sm text-zinc-500 pb-5'>Price:</label>
                    <input type="text" className='border border-zinc-200 p-4 w-full mt-3 outline-none rounded-xl'/>
                  </div>

                </div>

                <div className='pt-5'>
                    <label className='text-sm text-zinc-500 pb-5'>Description:</label>
                    <textarea type="text" className='border border-zinc-200 p-4 min-w-full max-w-full mt-3 outline-none rounded-xl'/>
                  </div>
              </div>

              <hr className='my-6'/>

              <div className='flex gap-14'>
                  <div>
                    <p>Date Of Event</p>
                    <div className=" w-full max-w-xs flex gap-3 pt-5">

                      <div>
                        <p className='text-sm text-zinc-400 pb-2 '>Year:</p>
                          <select className="select select-bordered">
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                        </select>
                      </div>


                      <div>
                        <p className='text-sm text-zinc-400 pb-2 '>Month:</p>
                        <select className="select select-bordered">
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                        </select>
                      </div>

                      <div>
                        <p className='text-sm text-zinc-400 pb-2 '>Days:</p>
                        <select className="select select-bordered">
                          <option>30</option>
                          <option>31</option>
                          <option>1</option>
                        </select>
                      </div>


                    </div>
                  </div>

                  <div>
                    <p>Event Time</p>
                    <div className=" w-full max-w-xs flex gap-3 pt-5">

                      <div>
                        <p className='text-sm text-zinc-400 pb-2 '>Hours:</p>
                        <div className='flex items-center gap-3'>
                          <input type="text" placeholder='00' className='w-14 rounded-lg border border-zinc-300 p-3 px gap-2-4 outline-none'/>
                          <div>:</div>
                        </div>
                      </div>
                    

                      <div>
                        <p className='text-sm text-zinc-400 pb-2 '>Mins:</p>
                        <div className='flex items-center gap-3'>
                          <input type="text" placeholder='00' className='w-14 rounded-lg border border-zinc-300 p-3 px gap-2-4 outline-none'/>
                          <div>:</div>
                        </div>
                      </div>

                      <div>
                        <p className='text-sm text-zinc-400 pb-2 '>am-pm:</p>
                        <select className="select select-bordered">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                      </div>

                    </div>
                  </div>

                  <div>
                    <p>Date Of Event</p>
                    <div className=" w-full max-w-xs flex gap-3 pt-5">

                      <div>
                          <div className="flex gap-4">
                            <div>
                              <p className='text-sm text-zinc-400 pb-2 '>Days:</p>
                              <input type="text" placeholder='00' className='w-14 rounded-lg border border-zinc-300 p-3 px gap-2-4 outline-none'/>
                            </div>

                            <div>
                              <p className='text-sm text-zinc-400 pb-2 '>Hours:</p>
                              <input type="text" placeholder='00' className='w-14 rounded-lg border border-zinc-300 p-3 px gap-2-4 outline-none'/>
                            </div>

                            <div>
                              <p className='text-sm text-zinc-400 pb-2 '>Minutes:</p>
                              <input type="text" placeholder='00' className='w-14 rounded-lg border border-zinc-300 p-3 px gap-2-4 outline-none'/>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>

              <hr className='my-8'/>
              <p className='pt-2 font-semibold'> Host</p>

              <div>
                <div>
                  <p className='text-sm text-zinc-600 py-5'>Speakers:</p>
                  <div className='flex gap-4 items-center'>

                    <div className='flex bg-zinc-100 p-2 gap-5 px-6 rounded-xl items-center'>
                      <img src={proImage} alt="" className='w-12' />
                      <div>
                        <p className='text-sm'>algoname</p>
                        <p className='text-xs text-zinc-500'>user@gmail.com</p>
                      </div>
                      <IoCloseCircleOutline className='text-xl text-zinc-500'/>
                    </div>

                    <div className='flex bg-zinc-100 p-2 gap-5 px-6 rounded-xl items-center'>
                      <img src={proImage} alt="" className='w-12' />
                      <div>
                        <p className='text-sm'>algoname</p>
                        <p className='text-xs text-zinc-500'>user@gmail.com</p>
                    </div>
                    <IoCloseCircleOutline className='text-xl text-zinc-500'/>

                  </div>
                  <div>
                    <img src={add} alt="" className='w-16 cursor-pointer'/>
                  </div>

                  </div>
                </div>

                <div>
                  <p className='text-sm text-zinc-600 py-5'>Guest Speakers:</p>
                  <div className='flex gap-4 items-center'>

                    <div className='flex bg-zinc-100 p-2 gap-5 px-6 rounded-xl items-center'>
                      <img src={proImage} alt="" className='w-12' />
                      <div>
                        <p className='text-sm'>algoname</p>
                        <p className='text-xs text-zinc-500'>user@gmail.com</p>
                      </div>
                      <IoCloseCircleOutline className='text-xl text-zinc-500'/>
                    </div>

                    <div className='flex bg-zinc-100 p-2 gap-5 px-6 rounded-xl items-center'>
                      <img src={proImage} alt="" className='w-12' />
                      <div>
                        <p className='text-sm'>algoname</p>
                        <p className='text-xs text-zinc-500'>user@gmail.com</p>
                    </div>
                    <IoCloseCircleOutline className='text-xl text-zinc-500'/>

                  </div>
                  <div>
                    <img src={add} alt="" className='w-16 cursor-pointer'/>
                  </div>

                  </div>
                </div>
              </div>

              <hr className='my-8'/>

            </div>



          </div >
        </div>
    </div>
  )
}

export default CreateBody