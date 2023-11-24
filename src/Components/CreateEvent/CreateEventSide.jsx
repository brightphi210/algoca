
import React from 'react'

import { FaTelegram } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const CreateEventSide = () => {
  return (
    <div>
        <div className='fixed right-10 pt-36'>
                
            <div className='bg-white rounded-3xl p-7 w-90'>
                
                
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

export default CreateEventSide