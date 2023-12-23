import React from 'react'
import Menu from './Menu'
import SearchModal from '../SearchModal'

type Props = {}

const RightContent = (props: Props) => {
  return (
    <nav className='flex items-center'>

    <div className='hidden md:block'>
    <div className='flex gap-3 cursor-pointer items-center'>
      <div>
        <SearchModal />
      </div>
      
        <div>About</div>
         <div>Bookings</div>
         
        <div>Payment Guide</div>
        {/* usermenu handles logout and logins*/}
        <div> UserMenu </div>
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