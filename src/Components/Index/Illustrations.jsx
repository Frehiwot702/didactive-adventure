import React, { useRef } from 'react'
import YellowBar from '../Common/YellowBar'
import { useScroll, useTransform, motion } from 'framer-motion'

const Illustrations = () => {

  const container = useRef(null)

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const sm = useTransform(scrollYProgress, [0,1],[0,-50])
  const md = useTransform(scrollYProgress, [0,1],[0,-170])
  const lg = useTransform(scrollYProgress, [0,1],[0,-270])


  console.log('scroll progress', sm)

  return (
    <div ref={container} className='px-16'>
      <div className='bg-darkRed py-2 my-3 rounded-sm'></div>
        <YellowBar title='ILLUSTRATIONS & BLENDER'/>
      <div className='bg-darkRed py-2 my-3 rounded-sm'></div>
      
      <div className='grid grid-cols-3 h-full gap-10 relative py-16'>
          <div className='space-y-16 my-auto'>
            <motion.div style={{y: md}} className='group relative'>
              <img src='./coffee.png' className='h-[25%] w-full object-cover object-bottom rounded-md'/>
              <div className='hidden  bg-black/60 text-white group-hover:flex flex-col justify-end absolute top-0 p-5 rounded-md w-full h-full'>
                <h3 className='text-2xl font-bold'>Midnight Walk</h3>
                <h3 className='text-white/50'>8/15/2023</h3>
                <p>This illustration is made to show walking in the dark. </p>
              </div>
            </motion.div>
            <img src='./self-art1.jpg' className='h-[40%] w-full object-cover object-center rounded-md'/>
          </div>
          <motion.img style={{y: lg}} src='./cottage.png' className='h-[80%] w-full my-auto object-cover object-bottom rounded-md'/>
          
          <div className='space-y-16 my-auto'>
            <img src='./room.png' className='max-h-[17%] w-full object-cover object-bottom rounded-md'/>
            <img src='./self-art2.jpg' className='h-[40%] w-full object-cover object-center rounded-md'/>
          </div>
      </div>
    </div>
  )
}

export default Illustrations