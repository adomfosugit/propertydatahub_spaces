
import React from 'react'

type Props = {}

const RightContent = (props: Props) => {
  return (
    <nav className='flex items-center'>

    <div className='hidden half:block'>
    <div className='flex gap-3 cursor-pointer '>
        <div>About</div>
         <div>Bookings</div>
        <div>Payment Guide</div>
        {/* usermenu handles logout and logins*/}
        <div> UserMenu </div>
    </div>

    </div>
    {/* for smaller screens */}
    
    </nav>
  )
}

export default RightContent