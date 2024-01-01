
import React from 'react'

import {  section, section1, section2 } from '@/constants'


type Props = {}

const Footer = (props: Props) => {
  return (
    
    <div className=' grid grid-rows-3 md:grid-cols-3  gap-4 justify-center  bg-green-700 text-white max-w-[2520px]  xl:px-20 md:px-10 sm:px-2 px-4 py-4  h-[300px] md:h-[180px]'>

    
    <div>
        {section.map((sec) => (
            <div  className=' justify-center text-center' key={sec.title}>
                    <h1 className='font-bold text-lg md:text-2xl px-2 hover:text-green-900 '>{sec.title}</h1>
                     {sec.details.map((head)=> (
             <p  className= "cursor-pointer text-sm md:text-lg" key={head.label}>{head.label}</p>
                                          ))}          
            </div>
        ))}
     </div>
     
    <div>
        {section1.map((sec) => (
            <div  className=' justify-center text-center' key={sec.title}>
                    <h1 className='font-bold text-lg md:text-2xl px-2 hover:text-green-900 '>{sec.title}</h1>
                     {sec.details.map((head)=> (
             <p  className= "cursor-pointer text-sm md:text-lg " key={head.label}>{head.label}</p>
                                          ))}          
            </div>
        ))}
     </div>
    <div>
        {section2.map((sec) => (
            <div  className=' justify-center text-center' key={sec.title}>
                    <h1 className='font-bold text-lg md:text-2xl px-2 hover:text-green-900 '>{sec.title}</h1>
                     {sec.details.map((head)=> (
             <p  className= "cursor-pointer text-sm md:text-lg" key={head.label}>{head.label}</p>
                                          ))}          
            </div>
        ))}
     </div>

        



    
    </div>
  )
}

export default Footer