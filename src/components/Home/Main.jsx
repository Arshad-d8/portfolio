
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import img from '../../assets/home-right.png'
import { NavLink } from 'react-router-dom';

export default function Main() {
    return (
        <div className=' bg-[url(./assets/bg2.png)] bg-cover bg-cente h-full px-2 py-20 sm:px-5 sm:py-25 lg:px-20 lg:py-20'>
            <div className='text-white flex flex-col gap-y-10 w-full bg-green900 text-center'>
                
                <div className='text-white flex flex-col gap-y-5 w-full bg-green900 text-center'>
                    <h1 className=' tracking-widest text-white text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold w-full'>WEB DEVELOPER</h1>
                    <div className='dot  w-full flex flex-row px-4 text-xs sm:text-md sm:px-15 md:px-30 lg:px-30 md:text-lg lg:text-3xl font-light bg-amber400 justify-between'>
                        <p className=''>#REACT</p>
                        <p className=''>#EXPRESS</p>
                        <p className=''>#NODE JS</p>
                        <p className=''>#MONGO DB</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-10 px-2 sm:px-20 w-full justify-between'>
                    <img className=' md:h-70 lg:h-90 rounded-2xl bg-white/2 pl-4' src={img} alt="" />
                    <div className='place-content-end gap-y-5 flex flex-col  items-start py-10'>
                        <p className='text-start md:text-sm lg:text-lg'>I'am <span className='text-yellow-300'>Arshad Rahman</span> Motivated Full-Stack MERN Developer with hands-on experience in developing dynamic web applications, implementing APIs, and integrating front-end and backend systems. Completed multiple personal and academic projects showcasing strong UI development, API handling, and problem-solving capabilities.</p>
                        <NavLink className='bg-yellow-400 text-black font-semibold px-5 py-2 text-xl rounded-lg flex items-center gap-x-3 md:text-sm lg:text-lg' to={'/contacts'} >Start a Project Now <MdArrowOutward className='lg:text-2xl mt-1' /> </NavLink>
                    </div>
                </div>


            </div>
        </div>
    )
}
