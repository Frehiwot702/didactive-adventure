import React from 'react'

const YellowBar = ({title}) => {
  return (
    <div className='w-full bg-yellow text-black text-start pl-5 py-2'>
        <h3 className='text-3xl font-extrabold tracking-wide'>{title}</h3>
    </div>
  )
}

export default YellowBar