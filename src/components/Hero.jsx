import React from 'react'
import { Download } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import Profile from '../assets/pic.jpg'
import { motion } from 'framer-motion';
import "../Css/Hero.css"


const Hero = () => {
  return (
    <section className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-20 pt-10'>
        {/* stars */}
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      <div className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between'>
        <div className='md:space-y-6 px-4'>
            <motion.h1 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay:0.2}}
            className='md:text-6xl text-4xl font-bold mb-4'>Hi👋, I'm <p className='text-blue-400'>Naeem Akhtar</p></motion.h1>
            <motion.p 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.2, delay:0.4}}
            className='md:text-2xl text-lg mb-3'>Full-Stack Developer | MERN Stack Enthusiast</motion.p>
            <motion.p 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.4, delay:0.5}}
            className='lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300'>I build fast, responsive, and user-friendly web applications using MongoDB, Express.js, React, and Node.js. I love turning ideas into real-world projects and continuously learning to grow as a developer.</motion.p>
            <a href="/src/assets/Resume.pdf" target="_blank">
            <motion.button 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.4, delay:0.5}}
            className='px-3 py-2 mt-5 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] '><Download className='w-5 h-5'/> Download CV</motion.button>
            </a>
            <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
              <a href="https://www.facebook.com/share/1DcMimv1X6/" target="_blank">                <FaFacebook className='hover:text-blue-400' />
              </a>
              <a href="https://www.instagram.com/naeem_akhtar_8290?igsh=MTZoMWJleTdlZTR4dw==" target="_blank">
              <FaInstagram className='hover:text-blue-400' />
              </a>
              <a href="https://www.linkedin.com/in/naeem-akhtar-developer" target="_blank">
              <FaLinkedin className='hover:text-blue-400' />
              </a>
              <a href="https://github.com/Naeem8290" target="_blank">
              <FaGithub className='hover:text-blue-400' />
              </a>
            </div>
        </div>
        <div className='relative group'>
            <motion.img 
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.4, delay:0}}
            src={Profile} alt="" className='rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
