import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({title, detail, link, image, git, figma}) => {

  const container = useRef(null)

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
 
  const md = useTransform(scrollYProgress, [0,1],[0,-10])

  return (
    <motion.div 
      style={{y: md}}
      className='group h-[25em] relative'>
        <img src={image} className='h-[100%] w-full object-cover object-left rounded-md'/>
        <div className='hidden  bg-black/60 text-white group-hover:flex flex-col justify-end absolute top-0 p-5 rounded-md w-full h-full'>
          <h3 className='text-2xl font-bold'>{title}</h3>
          <h3 className='text-white/50'>8/15/2023</h3>
          <p>{detail}</p>
        </div>
      </motion.div>
    // <motion.div 
    // // animate={{boxShadow: '0 0 25px rgba(255, 165, 0, 9)',}}
    // className='group rounded-md bg-green/80'>
      
    //   <div className='group flex justify-end p-5 space-x-4'>
    //     <Link to={git}><FaGithub fill='#FFFFFF' size={20}/></Link>
    //     <Link to={figma}>
    //       <svg className='w-5' viewBox="0 0 128 128">
    //         <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
    //       </svg>
    //     </Link>
    //   </div>
    //     <div>
    //       <img src='./kzHerosection.png' className='w-full h-[28em] object-cover'/>
    //     </div>
    //     <div className='h-[10em]  text-white flex flex-col justify-end p-5'>
    //       <div className='hidden  bg-black/60 text-white group-hover:flex flex-col justify-end absolute top-0 p-5 rounded-md w-full h-full'>
    //         <p className='font-light text-sm texth-gray-400'>{detail}</p>
    //       </div>
    //       <h3 className='text-5xl'>{title}</h3>
    //     </div>
    //     {/* <img src={image} className='col-span-4 w-full object-cover border-4 border-b-8 border-lightGray  shadow-xl rounded-md'/>
    //     <div className='col-span-2 space-y-4 my-auto'>
    //       <h3 className='text-3xl font-bold u'>{title}</h3>
    //       <p>{detail}</p>

    //       <button className='w-full bg-blue py-2 px-10 font-bold tracking-wide text-xl text-white'>
    //         <Link>View More</Link>
    //       </button>
    //     </div> */}
    // </motion.div>
  )
}

export default ProjectCard