import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      
      <img src={assets.logo} width={150} alt="Logo" />

      <p className='flex-1 border-l border-gray-500 pl-4 text-gray-700 max-sm:hidden'>
        Copyright @<span>Ravi Pandey</span> | All right reserved.
      </p>

      <div className="flex gap-2.5">
        <img src={assets.instagram_icon} width={35} alt="" />
        <img src={assets.twitter_icon} width={35} alt="" />
      </div>

    </div>
  )
}

export default Footer
