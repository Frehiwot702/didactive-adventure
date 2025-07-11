import React, {useState} from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const Navigation = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        open : {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: 'spring',
                stiffness: 400,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    }

  return (
    <nav className='flex pl-10 py-7'>
        <ul className='w-full flex justify-center text-mediumGray tracking-wide font-semibold space-x-16 text-[1em] '>
            <li className=''>
                <Link to='#'>HOME</Link>
            </li>
            <li>
                <Link to='#about'>ABOUT ME</Link>
            </li>
            <li>
                <Link to='#works'>PROJECTS</Link>
            </li>
            <li>
                <Link to='#contact'>CONTACT</Link>
            </li>
        </ul>
        {/* <motion.div animate={open ? "open": "closed"} className='right-0 top-0 bg-white w-80 fixed'>
            <div  className='right-16 bg-white rounded-full w-10 h-10 flex items-center justify-center fixed'>
                <HiMenuAlt3 onClick={() => setOpen(!open)} fill='#FF0000' className='border-5' size={25}/>
            </div>

            <motion.ul variants={variants} >
                <li>Telegram</li> <li>Telegram</li> <li>Telegram</li> <li>Telegram</li> <li>Telegram</li>
            </motion.ul>
            
        </motion.div> */}
    </nav>
  )
}

export default Navigation