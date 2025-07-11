import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div id='contact' className='pt-5'>
      <div className='bg-green py-10 mt-5 px-16 space-y-2'>
        <h3 className='font-bold text-white text-7xl font-banery'>Get In touch!</h3>
        <h5 className='text-md text-white/50 font-bold uppercase'>Frehiowt'S Portifolio</h5>

        <div className='w-full flex justify-between text-white font-normal pt-5'>
          <div className='flex gap-5'>
            <h3 className='flex items-center gap-3'> <FaPhoneAlt fill='#AB9C81' size={20}/> +251 97900600 <br/> +251 941571366</h3>
            <h3 className='flex items-center gap-3'> <MdEmail fill='#AB9C81' size={20}/> frehiwot.tewodros112@gmail.com</h3>
          </div>
          <div className='flex gap-5'>
            <Link to='https://github.com/Frehiwot702'><FaGithub fill='#AB9C81' size={20}/></Link>
            <Link to='https://www.linkedin.com/in/frehiwot-tewodros-06503924b/'><FaLinkedinIn fill='#AB9C81' size={20}/></Link>
            <Link to='https://t.me/fruittedi'><TbBrandTelegram fill='#AB9C81' color='#AB9C81' size={20}/></Link>
            <FaInstagram fill='#AB9C81' size={20}/>
            <BsWhatsapp fill='#AB9C81' size={20}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact