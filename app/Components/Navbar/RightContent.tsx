import React from 'react'
import Menu from './Menu'
import SearchModal from '../SearchModal'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

type Props = {}

const RightContent = (props: Props) => {
  return (
    <nav className='flex items-center'>

    <div className='hidden md:block'>
    <div className='flex gap-3 cursor-pointer items-center'>
      <div>
        <SearchModal />
      </div>
      
        <div className=' hover:text-green-700 font-bold hover:cursor-pointer'>About</div>
        <Link href='/rooms'>
         <div className=' hover:text-green-700 font-bold hover:cursor-pointer'>All Spaces</div>
        
        </Link>
         
        <div className=' hover:text-green-700 font-bold hover:cursor-pointer'>Advertise with Us</div>
        {/* usermenu handles logout and logins*/}
        <div> <UserButton /> </div>
    </div>

    </div>
    {/* for smaller screens */}
    <div className=' flex gap-2 md:hidden'>
      <SearchModal />
      <Menu  />
    </div>
    
    </nav>
  )
}

export default RightContent