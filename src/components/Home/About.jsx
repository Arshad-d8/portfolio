import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import img from '../../assets/about1.png'

export default function About() {
  return (
    <div className='text-white flex flex-col gap-10 md:gap-0 md:flex-row justify-between w-full bg-[url(./assets/bg2.png)] bg-center h-full px-2 py-20 sm:px-5 sm:py-25 lg:px-30 lg:py-20'>
      <div className='flex flex-col gap-5 md:w-[50%] justify-center text-center items-center content-center md:text-end md:items-end'>
        <p className='text-4xl font-bold '><span className='text-yellow-400'>A</span>bout Me</p>
        <p className='text-5xl leading-15 font-semi-bold'>Passionate <br /> Web Developer</p>
        <p className='text-sm'>I’m a MERN Stack Developer skilled in building responsive, full-stack web applications using MongoDB, Express, React, and Node.js. I enjoy turning ideas into real-world digital solutions.I design and develop fast, scalable web applications using the MERN stack, combining clean code with user-friendly experiences.</p>
        <a className='flex w-fit px-10 py-2 rounded-lg text-black items-center gap-2 text-lg bg-yellow-500 cursor-pointer' href='/CV.pdf' download="Arshad-Rahman-CV" >Download Resume < MdOutlineFileDownload className='items-center' /> </a>
      </div>
      <div className=' bg-green800 place-items-center md:w-[50%]'>
        <div className='flex flex-col sm:w-80 border border-white/10 rounded-3xl overflow-hidden'>
             <img className='' src={img} alt="" />
             <div className='text-center py-4'>
                <p className='dot text-3xl font-bold' >Arshad Rahman</p>
                <p className='dot text-xl' >Web Developer</p>
             </div>

        </div>
      </div>
    </div>
  )
}
