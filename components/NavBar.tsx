import React from 'react'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-5 py-2 shadow-sm border-b-[1px]'>
        <Image
        src='/bmw-M3-gtr.png'
        alt='bmw'
        width={100}
        height={100}
        />
        <div className='hidden md:flex gap-8'>
            <h2 className='hover:bg-blue-500 hover:rounded-lg px-3 cursor-pointer'>Home</h2>
            <h2 className='hover:bg-blue-500 hover:rounded-lg px-3 cursor-pointer'>History</h2>
            <h2 className='hover:bg-blue-500 hover:rounded-lg px-3 cursor-pointer'>Contact Us</h2>
        </div>
        <UserButton/>
    </div>
  )
}

export default NavBar