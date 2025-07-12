import React, { useRef } from 'react'
import YellowBar from '../Common/YellowBar'
import BackgroundCard from '../Common/BackgroundCard'
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimationOnScroll from 'react-animate-on-scroll'

const Background = () => {

  const container = useRef(null)
  const {scrollXProgress, scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const md = useTransform(scrollYProgress, [0,1],[20,-170])
// console.log('y transform', yTransform)
  const variants = {
    hidden: { 
      opacity: 0,
      backgroundColor: "transparent",
      width: 0 
    },
    visible: { 
      opacity: 1, 
      backgroundColor: "#FFE600",  // Yellow background
      width: '45%', 
      transition: { 
        type: 'spring',
        ease: "easeIn",
        opacity: { duration: 1 },
        backgroundColor: { duration: 1 },
        width: { duration: 1, delay: 1 }  // Delay for background width expansion
      }
    }
  };
  const variants2 = {
    hidden: { 
      opacity: 0,
      backgroundColor: "transparent",
      width: 0,
      scale: 0
    },
    visible: { 
      opacity: 1,
      scale: 1, 
      backgroundColor: "#FFE600",  // Yellow background
      width: '50%', 
      transition: { 
        type: 'spring',
        ease: "easeIn",
        opacity: { duration: 1 },
        backgroundColor: { duration: 2 },
        width: { duration: 1, delay: 1 }  // Delay for background width expansion
      }
    }
  };
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <div className='w-full grid md:grid-cols-7 px-16 pb-24'>
          <div className='text-end col-span-3 my-auto'>
            <motion.h3
              inital={{x: -130}}
              animate={{x: 0}} 
              transition={{duration: 2, delay: 1.5}}
              className='text-4xl text-[#AB9C81] font-normal'>Education</motion.h3>
            <div className='text-black/50 py-5 flex flex-col items-end'>
              <h3 className='font-bold text-lg text-black/80 uppercase'>Bachelors Degree in Computer Science</h3>
              <h4 className=''>St.Mary's University, Addis Ababa</h4>
              <h5 className='text-[0.8em] bg-[#AB9C81]/70 flex w-fit mr-0 px-4 py-[0.3em] text-white text-end justify-end rounded-full'>2019 - 2023 GC</h5>
            </div>
            <div className='text-black/50 py-5 flex flex-col items-end'>
              <h3 className='font-bold text-lg text-black/80 uppercase'>Masters Degree in Computer Science</h3>
              <h4 className=''>HilCoE Science and Technology, Addis Ababa</h4>
              <h5 className='text-[0.8em] bg-[#AB9C81]/70 flex w-fit mr-0 px-4 py-[0.3em] text-white text-end justify-end rounded-full'>2025 - Present GC</h5>
            </div>
          </div>
          
            <motion.vr 
              initial={{y: 170}}
              animate={{y: 0}}
              transition={{duration: 2, delay: 1}}
              className='text-black md:h-screen w-[0.1em] bg-[#AB9C81] m-auto'/>
        

          <div className='col-span-3 my-auto'>
            <h3 className='text-4xl text-[#AB9C81] font-normal'>Experience</h3>
            <div className='text-black/50 py-5' >
              <h3 className='font-bold text-lg text-black/80 uppercase'>Intern Web Designer and Maintainer</h3>
              <h4 className=''>Queen’s Supermarket, Addis Ababa</h4>
              <h5 className='text-[0.8em] bg-[#AB9C81]/70 w-fit px-4 py-[0.3em] text-white rounded-full'>March 2023 - June 2023 GC</h5>

              <p className='pt-5 text-[0.8em]'>During my internship period, while working with the IT Department of Queen's Supermarket, I built a Dynamic website for Queen's Supermarket using HTML, Css & PHP. I also participated with maintenance and troubleshooting task in their building.</p>
            </div>

            <div className='text-black/50 py-5'>
              <h3 className='font-bold text-lg text-black/80 uppercase'>Assistant Lecturer</h3>
              <h4 className=''>St.Mary's University, Addis Ababa</h4>
              <h5 className='text-[0.8em] bg-[#AB9C81]/70 w-fit px-4 py-[0.3em] text-white rounded-full'>December 2023 - June 2025 GC</h5>

              <p className='pt-5 text-[0.8em]'>As an Assistant Graduate, I lecture basic Computer Science courses to freshman students including Introduction to Computer Science, Emerging Technologies, Computer Application and Programming Fundamentals using C++ as a base Programming Language.</p>
            </div>

            <div className='text-black/50 py-5'>
              <h3 className='font-bold text-lg text-black/80 uppercase'>Frontend Software Engineer</h3>
              <h4 className=''>Tamcon Software Solution, Addis Ababa</h4>
              <h5 className='text-[0.8em] bg-[#AB9C81]/70 w-fit px-4 py-[0.3em] text-white rounded-full'>June 2025 to Present GC</h5>

              <p className='pt-5 text-[0.8em]'>As a Frontend Developer, I build websites designed using different popular frontend frameworks including Nextjs. I also got to experience on how to build animated betting games. </p>
            </div>
          </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Background