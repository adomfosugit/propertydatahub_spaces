import Image from 'next/image'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className='text-slate-900 font-bold tracking-normal half:tracking-[5px] h-[30px] z-20 ring-2 ring-green-500'>
      <Image src= '/logo.jpeg' alt='logo' width={100} height={100} /> 
      </div>
  )
}

export default Logo