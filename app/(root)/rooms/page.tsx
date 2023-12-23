import CardList from '@/app/Components/Card/CardList'
import { hostelListings } from '@/constants'
import Image from 'next/image'
import React from 'react'


type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex justify-center max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
      <div className='pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
      {hostelListings.map((list)=> (
      <CardList key={list.name} name={list.name} imageUrl={list.imageUrl} roomType={list.roomType} />
      
      ))}
      </div>

    </div>
  )
}

export default page