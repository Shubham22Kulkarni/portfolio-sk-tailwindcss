import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-primary-50 text-secondary-100 py-5'>
        <div className='container w-full'>
            <p className='flex flex-row gap-1 justify-end items-center'>Copyright {new Date().getFullYear()} <FaRegCopyright /> All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer