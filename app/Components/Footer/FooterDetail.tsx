import React from 'react'

type Props = {
    heading: string;
}

const FooterDetail = ({heading}: Props) => {
  return (
    <div className='flex flex-col'>
        <h1 className='font-bold text-lg  px-2 hover:text-blue-600'>{heading}</h1>

    </div>
  )
}

export default FooterDetail