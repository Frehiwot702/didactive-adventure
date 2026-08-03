import { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion"
// import HerosectionBg from '../P5/HerosectionBg'

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
    <div ref={container} className='w-full h-screen grid md:grid-cols-6 bg-no-repeat bg-contain bg-right' >
      {/* <HerosectionBg className=''/> */}
      <div className='text-center text-lg font-semibold text-[#AB9C81] font-jetbrains md:hidden'>
        <h3>Technology Enthusiast</h3>
      </div>
      <div className='hidden md:flex md:col-span-1  justify-start pl-10 '>
       <h3 className='text-center text-lg font-semibold text-[#AB9C81] font-jetbrains'>
        T <br/> E <br/> C <br/> H <br/> N <br/> o <br/> L <br/> O <br/> G <br/> Y <br/>
        <br/>  
        E <br/> N <br/> T <br/> H <br/> U <br/> S <br/> I <br/> A <br/> S <br/> T
       </h3>
      </div>
      <div className='py-10 md:col-span-5 text-start z-20'>
       
        {/* <div className=''>
          <h3 className=' text-3xl font-dancing'>Computer Scientist</h3>
          {/* <motion.img 
            initial={{opacity:0, x:-280}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, type:"spring", stiffness:120, delay: 1}}
            src='./singleWire.svg' className='w-52'/> 
        </div> */}
        <motion.div 
          className='justify-start text-2xl md:leading-tight -space-y-10 font-banery text-start'
          initial={{y: 480}}
          animate={{y: 0}}
          transition={{duration:2, ease: "easeOut", type: "spring", stiffness: 150}}
        >
          <h3 
            className='font-extrabold tracking-wide text-[2em] md:text-[8em] text-[#6F7B57] text-center z-20'>FREHIWOT</h3>
          <motion.h3 
            initial={{scale:20}}
            animate={{scale:1}}
            style={{x: md}}
            transition={{duration:2, ease: "easeOut", type: "spring",scale}}
            className='relative font-bold text-black text-[0.7em] md:text-[6em] pl-10 md:pl-16 tracking-wide'>TEWODROS</motion.h3>
        </motion.div>
        <motion.div
          className='relative justify-center px-10 md:px-16 text-center md:text-start text-md  leading-relaxed'
          initial={{y: 480}}
          animate={{y: 0}}
          transition={{duration:2, ease: "easeOut", type: "spring", stiffness: 150}}
        >
          <p className='font-bold text-lg flex items-center gap-2'>Software Engineer
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6F7B57" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
            </svg>
          </p>
          <p>Building premium digital products, AI-powered applications, and cloud platforms.</p>
          <div className='flex items-center gap-8 mt-5'>
            <button className='border border-[#6F7B57] text-[#6F7B57] px-4 py-2 rounded-md hover:bg-[#6F7B57] hover:text-white transition-all duration-300'>
              View Projects
            </button>
            <button className='border border-[#6F7B57] bg-[#6F7B57] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#6F7B57] transition-all duration-300'>
              Download Resume
            </button>
          </div>
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