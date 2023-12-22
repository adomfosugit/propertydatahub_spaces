
import React from 'react'

import {  section } from '@/constants'


type Props = {}

const Footer = (props: Props) => {
  return (
    
    <div className='flex gap-[40px] bg-blue-400 text-white max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-4 justify-center'>



        {section.map((sec) => (
            <div  className='flex-col justify-center text-center' key={sec.title}>
                    <h1 className='font-bold text-lg px-2 hover:text-blue-600 '>{sec.title}</h1>
                    

                    {sec.details.map((head)=> (
             <p  className= "cursor-pointer" key={head.label}>{head.label}</p>
                                          ))}

                
            </div>
        ))}
        



    
    </div>
  )
}

export default Footer