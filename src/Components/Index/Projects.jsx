import React from 'react'
import YellowBar from '../Common/YellowBar'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import AnimationOnScroll from 'react-animate-on-scroll'

import { useSpring, animated } from 'react-spring';
import { ScrollAnimation } from 'react-animate-on-scroll';
import ProjectCard from '../Common/ProjectCard'
import ProjectCardReverse from '../Common/ProjectCardReverse'


const masonryOptions = {
  transitionDuration: '0.4s',
};

const items = [
  { id: 1, image: './kz.png' },
  { id: 2, image: './Bible hub.png' },
  { id: 3, image: './kzFooter.png' },
  { id: 4, image: './imsInside.png' },
  { id: 5, image: './bdGuest.png' },
  { id: 6, image: './index.png' },
  
];


const Projects = () => {


  return (
    <AnimationOnScroll animateIn="animate__fadeIn" >
      <div className='p-16' id='works'>
        <h3 className='text-6xl md:text-8xl font-banery font-bold text-black/50 '>Projects Completed</h3>

        <div className=''>
          <h3 className='text-4xl font-bold uppercase pt-5'>Applications</h3>
          <div className='grid md:grid-cols-5'>
            <p className=' text-[0.9em] md:col-span-3'>These are the personal projects I did by my own and asked by others. The apps are built using the technologies i mentioned in my experties.You can view my projects in detail on my github link.</p>
            <div className='col-span-2 flex items-end justify-end space-x-3'>
                <svg className='w-7' viewBox="0 0 128 128">
                  <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                </svg>
              <Link to='https://github.com/Frehiwot702'><FaGithub fill='#000000' size={30}/></Link>
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-5 max-h-[70%] relative my-10 rounded-md'>
          
            <div className='flex flex-col gap-4 h-full image-style'>
                <img 
                  className='w-full h-2/3 object-cover hover:scale-110 transition-all duration-150 delay-100'
                  src='./kz.png'/>
                <img 
                  className='w-full h-1/3 object-cover object-left hover:scale-110 transition-all duration-150 delay-100'
                  src='./kzFooter.png'/>
            </div>
            <div className='flex flex-col col-span-2 gap-4 image-style '>
                <img 
                  className='w-full h-1/3 object-cover object-left col-span-2 hover:scale-110 transition-all duration-150 delay-100'
                  src='./Bible hub.png'/>
                <img 
                  className='w-full h-1/3 object-cover object-left hover:scale-110 transition-all duration-150 delay-100'
                  src='./imsInside.png'/>
                <Link to='https://maya.mesobmenu.com/home'>
                  <img 
                    className='w-full  object-cover object-left hover:scale-110 transition-all duration-150 delay-100'
                    src='./simbatech.PNG'/>
                </Link>
            </div>
            <div className='flex flex-col gap-4 image-style'>
                <img 
                  className='w-full h-2/3 object-cover hover:scale-110 transition-all duration-150 delay-100'
                  src='./cargolink.png'/>
                <img 
                  className='w-full h-1/3 object-cover object-left hover:scale-110 transition-all duration-150 delay-100'
                  src='./imsLogin.png'/>
            </div>
            <div className='flex flex-col gap-4 image-style'>
                <img 
                  className='w-full h-1/3 object-cover object-left-top hover:scale-110 transition-all duration-150 delay-100'
                  src='./HMS.png'/>
                <img 
                  className='w-full h-2/3 object-cover object-left hover:scale-110 transition-all duration-150 delay-100'
                  src='./User UI.png'/>
            </div>
            <div className='col-span-2'>
              <Link to='https://yts-movies-u2cr.vercel.app/'>
                <img
                  alt='YTS movies'
                  className='h-96 w-full object-cover object-left-top hover:scale-110 transition-all duration-150 delay-100'
                  src='./YTSmovie.png'
                  />
              </Link>
            </div>
            <div className='col-span-3'>
              <Link to='https://furnix-six.vercel.app/'>
                <img
                  alt='FURNX website - homepage'
                  className='h-96 w-full object-cover object-left-top hover:scale-110 transition-all duration-150 delay-100'
                  src='./furniture.png'
                  />
              </Link>
            </div>
            
            {/* <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div> */}
          
          </div>
        </div>
        <div className='py-10 gap-16'>
          <div className='space-y-2 my-auto text-end'>
            <h3 className='text-4xl font-bold uppercase'>Logos</h3>
            {/* <p className=' text-[0.9em] col-span-3'>Designed logos as a personal project using adobe illsutrator and design.</p> */}
          </div>
          <div>
            <div className='py-5 grid md:grid-cols-5 gap-5'>
              <img 
                className='w-full h-full rounded-md object-cover my-auto'
                src='./TMFWhite.jpg' />
              <img 
                className='w-full h-full rounded-md object-cover'
                src='./logo2-1 orange.jpg' />
              <img 
                className='w-full h-full rounded-md object-cover object-center'
                src='./logo1-1 Gray.jpg' />
              <img 
                className='w-full h-full object-center rounded-md object-cover'
                src='./famm1.jpg' />
            </div>
          </div>
          
        </div>

        <div className='py-10 gap-16'>
          <div className='space-y-2 my-auto'>
            <h3 className='text-4xl font-bold uppercase'>Blender & illustrations</h3>
            {/* <p className=' text-[0.9em] col-span-3'>Designed logos as a personal project using adobe illsutrator and design.</p> */}
          </div>
          <div>
            <div className='py-5 grid md:grid-cols-5 gap-5'>
              <img 
                className='w-full h-full rounded-md object-cover my-auto'
                src='./coffee.png' />
              <img 
                className='w-full h-full rounded-md object-cover'
                src='./cottage.png' />
              <img 
                className='w-full h-full rounded-md object-cover object-center'
                src='./room.png' />
              <img 
                className='w-full h-full rounded-md object-cover'
                src='./self-art4.jpg' />
              <img 
                className='w-full h-full rounded-md object-cover object-center'
                src='./self-art2.jpg' />
            </div>
          </div>
          
        </div>
      </div>
    </AnimationOnScroll>

  )
}

export default Projects