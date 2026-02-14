import React from 'react'
import Logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <div className='bg-blue-900 pt-1 pb-2 fixed bottom-0 w-full text-white flex items-center flex-col'>
      <div className='flex items-center gap-3'>
        <img className='invert w-8 md:w-10' src={Logo} alt="" />
        <div className='md:text-lg text-md text-shadow-lg text-shadow-blue-800'>
          <span className='md:text-xl text-md font-semibold text-green-300'>E</span>du <span className='md:text-xl text-md font-semibold text-green-500'>Z</span>ap
        </div>
      </div>
      <div>
        Created with ❤️ by M Ahmad
      </div>
    </div>
  )
}

export default Footer
