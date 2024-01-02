import React from 'react'
import Searcher from '../Searcher'

type Props = {}

const Landing = (props: Props) => {
  return (
    <div className="  h-screen flex">
        <div className="bg-hero-pattern bg-cover w-1/2 hidden md:block">
          {/* Build out a corouseel  showing casing easeness of the web app*/}
          
        </div>
        <div className='bg-hero-pattern1 bg-cover items-center justify-center flex bg-blue-200 w-1/2 flex-1'>
            {/*contains form */}
            <div className=' max-w-[300px] w-3/4  half:w-1/2 h-[400px] bg-neutral-600/70 rounded-xl ring-2 ring-green-600 shadow-sm flex items-center justify-center font-bold text-white'>
                <div>
                  <Searcher />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing