
import React, { useState } from 'react'

import { IoIosSend } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

import ALogo from '../Images/A.png'


const CreateEventSide = () => {

    const [show, setShow] = useState(false)

    const handleShow =()=>{
        setShow(!show)
    }


  return (
    <div>
        <div className='fixed right-10 pt-36'>
                
            <div className='bg-white rounded-3xl p-7 w-90'>
                <p className='flex gap-2 items-center text-lg text-blue-950'><GoDotFill /> Actions</p>
                <hr />

                <div className="flex flex-col">
                    <div className="form-control w-full pt-4">
                        <label className="cursor-pointer label">
                        <span className="label-text text-sm text-zinc-500">Send out Notifications</span> 
                        <input type="checkbox" className="toggle toggle-primary " />
                        </label>
                    </div>

                    <div className="form-control w-full pt-4">
                        <label className="cursor-pointer label">
                        <span className="label-text text-sm text-zinc-500">Enable Donations</span> 
                        <input type="checkbox" className="toggle toggle-primary " />
                        </label>
                    </div>


                    <div className="form-control w-full pt-4">
                        <label className="cursor-pointer label">
                        <span className="label-text text-sm text-zinc-500">Display View Counts</span> 
                        <input type="checkbox" className="toggle toggle-primary " />
                        </label>
                    </div>


                    <div className="form-control w-full pt-4">
                        <label className="cursor-pointer label">
                        <span className="label-text text-sm text-zinc-500">Display Schedule Counts</span> 
                        <input type="checkbox" className="toggle toggle-primary " />
                        </label>
                    </div>

                    <div className="form-control w-full pt-4">
                        <label className="cursor-pointer label">
                        <span className="label-text text-sm text-zinc-500">Show Speakers</span> 
                        <input type="checkbox" className="toggle toggle-primary " />
                        </label>
                    </div>

                    <div className="form-control w-full pt-4">
                        <label className="cursor-pointer label">
                        <span className="label-text text-sm text-zinc-500">Show Guest Speakers</span> 
                        <input type="checkbox" className="toggle toggle-primary "/>
                        </label>
                    </div>


                    <button className='bg-blue-800 text-white w-full p-3 rounded-3xl mt-5' onClick={handleShow}>{!show ? 'Enable all Actions': 'Customize Actions'}</button>

                </div>
                
            </div>

            <div className='mt-3 bg-white rounded-3xl p-8 px-14 text-center'>
                <img src={ALogo} alt="" className='w-20 m-auto'/>
                <p className='py-6'>Algocal Help Center</p>
                <button className='bg-blue-800 text-white w-full p-3 rounded-3xl' onClick={()=>document.getElementById('my_modal_1').showModal()}>Ask Us Any Question</button>
            </div>




            <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <textarea placeholder="Send us a complaint here..." className="textarea textarea-bordered textarea-sm w-full h-64" ></textarea>

                    <div className='flex pt-8'>
                        <p className='text-sm'>Note: response will be sent to <br /> your email address...</p>
                        <button className='ml-auto flex items-center gap-1 bg-blue-800 p-2 px-5 rounded-3xl text-white'>Send <IoIosSend /></button>
                    </div>
                  </div>


                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>

                </dialog>
        </div>
    </div>
  )
}

export default CreateEventSide