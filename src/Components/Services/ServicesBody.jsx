import React from 'react'

import { GoDotFill } from "react-icons/go";

import serv1 from '../Images/serv1.png'
import serv2 from '../Images/serv2.png'

const ServicesBody = () => {
  return (
    <div className='pt-36 pl-96 px-20 w-full h-full pb-20 max-sm:gap-0 max-sm:px-4 max-sm:w-screen max-sm:pt-24 max-sm:h-full max-sm:block'>
      <div className='flex gap-10 max-sm:block'>
        <div className='bg-white p-10 rounded-3xl h-220 w-fit max-sm:py-10 max-sm:px-3'>
            <div className='h-200 overflow-y-scroll px-5'>
              <div>
                  <h2 className='text-xl font-semibold flex items-center gap-3 max-sm:text-sm'><GoDotFill /> Our Services</h2>

                  <p className='text-sm max-sm:text-xs text-justify pt-2'>
                    Algorand has set an event for fresh & upcoming devs to participate in the building of a new tech solution, 
                    happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,for fresh & upcoming devs
                  </p>
              </div>

              <div className='pt-10'>
                <h3 className='text-lg font-semibold max-sm:text-sm'>For The Algorand Community</h3>

                <p className='text-sm max-sm:text-xs text-justify pt-2'>
                  Algorand has set an event for fresh & upcoming devs to participate in the building of a new tech solution, 
                  happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, for fresh & upcoming devs
                  participate in the building of a new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, 
                  consectetuer adipiscing elit, sed diam nonummy
                </p>
                <img src={serv1} alt="" className='w-170 m-auto pt-10'/>
              </div>

              <div className='pt-20'>
                <h3 className='text-lg font-semibold max-sm:text-sm'>Keep Track Of All Events Related To The Algorand Community</h3>

                <p className='text-sm max-sm:text-xs text-justify pt-2'>
                  Algorand has set an event for fresh & upcoming devs to participate in the building of a new tech solution, 
                  happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, for fresh & upcoming devs
                  participate in the building of a new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, 
                  consectetuer adipiscing elit, sed diam nonummy
                </p>
                <img src={serv2} alt="" className='w-170 m-auto pt-10'/>
              </div>


              <div className='pt-20'>
                <h3 className='text-lg font-semibold max-sm:text-sm'>Create & Manage Event Schedules On This Platform</h3>

                <p className='text-sm max-sm:text-xs text-justify pt-2'>
                  Algorand has set an event for fresh & upcoming devs to participate in the building of a new tech solution, 
                  happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, for fresh & upcoming devs
                  participate in the building of a new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, 
                  consectetuer adipiscing elit, sed diam nonummy
                </p>
                <img src={serv1} alt="" className='w-170 m-auto pt-10'/>
              </div>
            </div>
        </div>


          <div className='w-220 ml-auto bg-white p-10 rounded-3xl h-220 max-sm:w-full max-sm:mt-10 max-sm:py-5 max-sm:px-3'>
            <div className='h-200 overflow-y-scroll px-3'>
              <p className='text-xl font-semibold pb-5 max-sm:text-sm'>Frequently asked questions (FAQ)</p>

                <input type="text" placeholder="Search FAQs here" className="input input-bordered w-full max-w-full max-sm:text-sm" />

                <div className='pt-5'>
                  <p className='text-sm font-semibold'>What Can I Use Algocal For?</p>
                  <p className='text-xs pt-3 text-justify text-zinc-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                    aliquam erat volutpat. Ut wisi ...
                  </p>
                </div>

                <div className='pt-5'>
                  <p className='text-sm font-semibold'>What Can I Use Algocal For?</p>
                  <p className='text-xs pt-3 text-justify text-zinc-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                    aliquam erat volutpat. Ut wisi ...
                  </p>
                </div>

                <div className='pt-5'>
                  <p className='text-sm font-semibold'>What Can I Use Algocal For?</p>
                  <p className='text-xs pt-3 text-justify text-zinc-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                    aliquam erat volutpat. Ut wisi ...
                  </p>
                </div>

                <div className='pt-5'>
                  <p className='text-sm font-semibold'>What Can I Use Algocal For?</p>
                  <p className='text-xs pt-3 text-justify text-zinc-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                    aliquam erat volutpat. Ut wisi ...
                  </p>
                </div>

                <div className='pt-5'>
                  <p className='text-sm font-semibold'>What Can I Use Algocal For?</p>
                  <p className='text-xs pt-3 text-justify text-zinc-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                    aliquam erat volutpat. Ut wisi ...
                  </p>
                </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default ServicesBody