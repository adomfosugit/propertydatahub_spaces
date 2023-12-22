import { Container } from '@radix-ui/themes'
import React from 'react'
import Logo from './Logo'
import RightContent from './RightContent'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm items-center'>
        <div className='py-4 border-b-[1px]'>
            <div className='flex justify-between max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
            <Logo />
            <RightContent />

            </div>
        </div>
    </div>
  )
}

export default Navbar