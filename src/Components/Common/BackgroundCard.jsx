import React from 'react'

const BackgroundCard = ({title, subtitle, detail}) => {
  return (
    <div className='flex space-x-5'>
        <img src='./singleYellowWire.svg' className='h-32'/>
        <div className=' space-y-1'>
            <h3 className='font-bold text-2xl'>{title}</h3>
            <h4 className='text-md'>{subtitle}</h4>
            <p className='text-sm text-white/70 pt-2'>{detail}</p>
        </div>
    </div>
  )
}

export default BackgroundCard