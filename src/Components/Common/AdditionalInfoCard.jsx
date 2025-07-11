import React from 'react'

const AdditionalInfoCard = ({title, list}) => {
  return (
    <div className=''>
        <h3 className='font-extrabold text-3xl'>{title}</h3>
        <p className='text-lg text-mediumGray pt-2 font-bold'>{list}</p>
    </div>
  )
}

export default AdditionalInfoCard