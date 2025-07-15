import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion"
import HerosectionBg from '../P5/HerosectionBg'

const Herosection = () => {

  const container = useRef(null)

  const {scrollXProgress, scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const sm = useTransform(scrollYProgress, [0,1],[-30,0])
  const md = useTransform(scrollYProgress, [0,1],[0,170])
  const scale = useTransform(scrollYProgress, [5,0],[810,0])

  return (
    <div ref={container} className='w-full h-screen grid grid-cols-6 bg-no-repeat bg-contain bg-right' >
      {/* <HerosectionBg className=''/> */}
      <div className='col-span-1 flex justify-start pl-10 '>
       <h3 className='text-center text-lg font-semibold text-[#AB9C81] font-jetbrains'>
        C <br/> O <br/> M <br/> P <br/> U <br/> T <br/> E <br/> R <br/>
        <br/>  
        S <br/> C <br/> I <br/> E <br/> N <br/> T <br/> I <br/> S <br/> T
       </h3>
      </div>
      <div className='py-10 col-span-5 text-start z-20'>
       
        {/* <div className=''>
          <h3 className=' text-3xl font-dancing'>Computer Scientist</h3>
          {/* <motion.img 
            initial={{opacity:0, x:-280}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, type:"spring", stiffness:120, delay: 1}}
            src='./singleWire.svg' className='w-52'/> 
        </div> */}
        <motion.div 
          className='absolute text-2xl leading-tight -space-y-10 font-banery text-center'
          initial={{y: 480}}
          animate={{y: 0}}
          transition={{duration:2, ease: "easeOut", type: "spring", stiffness: 150}}
        >
          <h3 
            className='font-extrabold tracking-wide md:text-[8em] text-[#6F7B57] text-center'>FREHIWOT</h3>
          <motion.h3 
            initial={{scale:20}}
            animate={{scale:1}}
            style={{x: md}}
            transition={{duration:2, ease: "easeOut", type: "spring",scale}}
            className='font-bold text-black md:text-[6em] pl-16 tracking-wide'>TEWODROS</motion.h3>
        </motion.div>
        

      </div>
      {/* <div className='col-span-1 flex justify-start pl-16 '>
        <img src='./wire.svg' className='h-[70%]'/>
      </div> */}
      {/* <div className='col-span-2 flex absolute right-64 top-44'>
          <motion.img 
            // style={{x: lg}}
            initial={{x: 500, opacity: 0, scale: 0}}
            animate={{x: 0, opacity:0.5, scale:1}}
            transition={{ease: "easeInOut", type: "spring", stiffness: 150}}
            src='./flower5.png' className='w-[10em] min-h-[10em] rounded-full object-cover'/>
      </div> */}
    </div>
  )
}

export default Herosection