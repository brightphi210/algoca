import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const CreateEvent = () => {
  return (
    <div>
        <Navbar />
        <div className='flex '>
          <Sidebar />
        </div>
    </div>
  )
}

export default CreateEvent