import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCardReverse = ({title, detail, link, image}) => {
  return (
    <div className='px-24 py-24 grid grid-cols-6 gap-10'>
        <div className='col-span-2 space-y-4 my-auto'>
        <h3 className='text-3xl font-bold u'>{title}</h3>
        <p>{detail}</p>
        <button className='w-full bg-blue py-2 px-10 font-bold tracking-wide text-xl text-white'>
            <Link>View More</Link>
          </button>
        </div>
        <img src={image} className='col-span-4 w-full object-cover border-4 border-b-8 border-lightGray  shadow-xl rounded-md'/>
    </div>
  )
}

export default ProjectCardReverse