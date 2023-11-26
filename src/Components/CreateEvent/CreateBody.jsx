import React, { useState } from 'react'

import { GoDotFill } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import { SlClose } from "react-icons/sl";

import proImage from '../Images/pro.png'
import add from '../Images/add.png'

const CreateBody = () => {

  const [toggle, setToggle] = useState(true)

  const [links, setlinks] = useState([
    {link: ""},
  ])

  const open =() =>{
    setToggle(!toggle)
  }



  const handleAdd = (e) => {
    e.preventDefault();
    setlinks([...links, {link: ""}])
  }

  const handleRemove = (e) => {
    const list = [...links];
    list.splice(e, 1)
    setlinks(list)
  }


  return (
    <div>
        <div className='pt-36 pl-96 px-20'>
          <div className='bg-white w-fit p-10 rounded-3xl h-220'>


            <div className=' h-200 px-5 overflow-y-scroll'>
              <p className='text-xl flex gap-2 font-semibold'> <GoDotFill className='text-2xl text-blue-800 items-center'/> Create Event</p>
              <p className='pt-14 font-semibold'> Event Details</p>

            {/* ================= Evenet Details ================================== */}
              <div className='py-6'>
                <div className='grid grid-cols-3 items-center gap-5'>

                  <div className='col-span-2'>
                    <label className='text-sm text-zinc-500 pb-3 block'>Event title:</label>
                    {/* <input type="text" className='border border-zinc-200 p-4 w-full mt-3 outline-none rounded-xl'/> */}
                    <input type="text"  className="input input-bordered input-lg w-full max-h-14 min-h-fit flex-shrink-0" />
                  </div>

                  <div className='col-span-1'>
                    <label className='text-sm text-zinc-500 pb-3 block'>Price:</label>
                    {/* <input type="text" className='border border-zinc-200 p-4 w-full mt-3 outline-none rounded-xl'/> */}
                    <input type="text"  className="input input-bordered input-lg w-full max-h-14 min-h-fit flex-shrink-0" />
                  </div>

                </div>

                <div className='pt-5'>
                    <label className='text-sm text-zinc-500 pb-3 block'>Description:</label>
                    <textarea type="text" className='border border-zinc-200 p-4 min-w-full max-w-full mt-3 outline-none rounded-xl'/>
                  </div>
              </div>


              <hr className='my-6'/>

              {/* ================= Evenet Dates ================================== */}

              <div className='flex gap-14'>
                  <div>
                    <p>Date Of Event</p>
                    <div className=" w-full flex gap-3 pt-5">

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
                    <div className=" w-full flex gap-3 pt-5">

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
                    <p>Event Duration</p>
                    <div className=" w-full flex gap-3 pt-5">

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


              {/* ================= Evenet Host ================================== */}
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
                    <img src={add} alt="" className='w-16 cursor-pointer' onClick={()=>document.getElementById('my_modal_2').showModal()}/>
                  </div>

                  </div>
                </div>

                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">

                    <h3 className="font-bold text-lg pb-5">Select Speaker!</h3>
                    <input type="text" placeholder="Search speakers here" className="input input-bordered input-md w-full mb-6" />

                    <hr className='border-zinc-100'/>
                    <div className='flex items-center py-3'>
                      <div className='flex gap-3 items-center'>
                        <img src={proImage} alt="" className='w-10'/>
                        <p>User Name</p>
                      </div>
                        <input type="radio" name="radio-2" className="radio radio-primary ml-auto w-5 h-5 p-0" />
                    </div>

                    <hr className='border-zinc-100'/>

                    <div className='flex items-center py-3'>
                      <div className='flex gap-3 items-center'>
                        <img src={proImage} alt="" className='w-10'/>
                        <p>User Name</p>
                      </div>
                        <input type="radio" name="radio-2" className="radio radio-primary ml-auto w-5 h-5 p-0" />
                    </div>

                    <hr className='border-zinc-100'/>

                    <div className='flex items-center py-3'>
                      <div className='flex gap-3 items-center'>
                        <img src={proImage} alt="" className='w-10'/>
                        <p>User Name</p>
                      </div>
                        <input type="radio" name="radio-2" className="radio radio-primary ml-auto w-5 h-5 p-0" />
                    </div>

                    <hr className='border-zinc-100'/>

                    <div className='flex items-center py-3'>
                      <div className='flex gap-3 items-center'>
                        <img src={proImage} alt="" className='w-10'/>
                        <p>User Name</p>
                      </div>
                        <input type="radio" name="radio-2" className="radio radio-primary ml-auto w-5 h-5 p-0" />
                    </div>

                    <hr className='border-zinc-100'/>

                    <div className='flex gap-3 pt-5'>
                      <button className="btn btn-active btn-primary rounded-3xl px-10 bg-blue-800 text-white" >Add</button>
                      {/* <button className="btn btn-neutral rounded-3xl px-10 text-zinc-700 bg-blue-800 border-none hover:bg-zinc-200">Add</button> */}
                    </div>
                  
                  </div>


                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>

                </dialog>


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


              {/* ================= Evenet Location ================================== */}

              <div className='pb-5'>
                <div className='grid grid-cols-4 items-center '>
                  <p className='col-span-3 font-semibold'>Location (Hosting From)</p>

                  <div className='flex items-center gap-4 col-span-1'>
                    <p className='text-sm text-zinc-500'>Virtual Event</p>
                    <input type="checkbox" className="toggle" onClick={open}/>
                  </div>
                </div>

                {toggle ? 
                (<>
                    <div className='flex w-full gap-5 items-center pt-5'>
                      <div >
                        <p className='pb-3 text-sm'>Country:</p>
                        <select className="select select-bordered select-lg w-full max-h-14 min-h-fit">
                          <option >Nigeria</option>
                          <option>South Africa</option>
                          <option>Ghana</option>
                          <option>Togo</option>
                        </select>
                      </div>

                      <div>
                        <p className='pb-3 text-sm'>City:</p>
                        <input type="text"  className="input input-bordered input-lg max-h-14 min-h-fit flex-shrink-0" />
                      </div>

                      <div>
                        <p className='pb-3 text-sm'>Address:</p>
                        <input type="text"  className="input input-bordered input-lg w-96 max-h-14 min-h-fit flex-shrink-0" />
                      </div>
                    </div>
                </>) : 
                (<>
                    <div className='pt-5'>
                      <p className='pb-3 text-sm'>Virtual Event Link:</p>
                      <input type="text"  className="input input-bordered input-lg w-full max-h-14 min-h-fit flex-shrink-0" />
                    </div>
                </>)}



              </div>

              <hr className='my-8'/>

              {/* ================= Evenet Other Links ================================== */}

              <div className='pb-10'>
                <p className='font-semibold'>Other Links</p>

                <div className='pt-5'>

                {links.map((item, index) => (
                  <>
                    <p className='pb-3 text-sm'>Web Link1:</p>
                    <div className='flex items-center gap-4'>
                        <div className='flex gap-4 items-center'>
                          <input type="text"  className="input input-bordered input-lg w-96 max-h-14 min-h-fit flex-shrink-0" />
                          {links.length > 1 && (
                            <SlClose className='text-xl text-zinc-400 cursor-pointer' onClick={handleRemove}/>
                          )}
                        </div>

                        { links.length -1 === index && links.length < 10 && (

                        <img src={add} alt="" className='w-14 cursor-pointer' onClick={handleAdd}/>
                        )}
                    </div>
                  </>
                ))}
  
                </div>

              </div>
            </div>
          </div >
        </div>
    </div>
  )
}

export default CreateBody